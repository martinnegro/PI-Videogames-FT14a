const axios = require('axios');
const { API_URL_GAMES, API_URL_GENRES,API_URL_PLATFORMS } = require('../constants');
const { API_KEY } = process.env;
require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

function dbLoad( Videogame, Genre, Platform ) {
  
  axios.get(`${API_URL_GENRES}${API_KEY}`)
        .then(async (response) => {
          for (let i = 0; i < response.data.results.length; i++) {
            await Genre.create({
              id: response.data.results[i].id,
              name: response.data.results[i].name
            })
          };
          console.log('Géneros cargados') 
        })
        .then(async () => { // La idea es traer todas las plataformas a la base de datos.
          let next = true;  // Como el paginado máximo es de 40 items, utilizo el while
          let i = 1;        // sobre la propiedad next de la respuesta.
          while (next) {
            let response = await axios.get(`${API_URL_PLATFORMS}${API_KEY}&page=${i}`); 
            for (let j = 0; j < response.data.results.length; j++) {
              await Platform.create({
                id: response.data.results[j].id,
                name: response.data.results[j].name
              })
            };
            next = response.data.next;
            i++;
          }
          console.log('Plataformas cargadas'); 
        }).then(async () => {
          for (let i = 1; i <= 3; i++) { 
            let response = await axios.get(`${API_URL_GAMES}${API_KEY}&page=${i}&page_size=40`)
            let result = response.data.results
            for (let j = 0; j < result.length; j++ ) {  // Mismo caso que las plataformas, pero los juegos son 500.000
              const vg = await Videogame.create({       // Por lo que llamo 3 veces para traer los primeros 120 juegos.
                id: uuidv4(),                           // Más adelante, en caso de requerir un juego que no se encuentre en la DB
                idRawg: result[j].id,                   // se hará el llamado correspondiente a la api.
                name: result[j].name,
                description: '',
                released: result[j].released,
                rating: result[j].rating,
                imgUrl: result[j].background_image
              })
              const platformsIds = result[j].platforms.map( p => p.platform.id)
              const genresIds    = result[j].genres.map( p => p.id) 
              await vg.addPlatform(platformsIds);
              await vg.addGenre(genresIds);
            }
          };
          console.log(`Juegos cargados`);
        }).catch( err => console.log(err));
}

module.exports = {
  dbLoad
}