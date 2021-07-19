import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAllPlatformsFalse } from '../redux/actions/platformsActions';
import { setAllGenresFalse } from '../redux/actions/genresActions';
import style from './styles/PostVideogame.module.scss'
import GenreSelector from './ForSelect/GenreSelector';
import PlatformSelector from './ForSelect/PlatformSelector'


const initialState = { 
    name: '', 
    description: '', 
    released: '', 
    rating: 0, 
    imgUrl: '' ,
    genres: [],
    platforms: []
}

function validate(input) {
    let errors = {};
    const { name, description, imgUrl, genres, platforms } = input
    if(!name) errors.name = 'El nombre es obligatorio';
    if(!description) errors.description = 'La descripción es obligatoria';
    const pattern = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (!imgUrl) errors.imgUrl = 'La url de la imagen es obligatoria';
    else if (!pattern.test(imgUrl)) errors.imgUrl = 'No es una url válida';
    if (genres.length < 1 || genres.length > 5 ) errors.genres = 'Selecciona entre 1 y 5';
    if (platforms.length < 1 || platforms.length > 5 ) errors.platforms = 'Selecciona entre 1 y 5'

    return errors;
}


function PostVideogame() {
    // Trae los géneros del redux y los setea si está vacío
    const dispatch = useDispatch()
    const selectedGenres = useSelector(state => state.genresReducer.selectedGenres);
    const selectedPlatforms = useSelector(state => state.platformsReducer.selectedPlatforms)
    
    const [ input, setInput ] = useState(initialState);
    const [ errors, setErrors ] = useState([{}]);
    const [ submit, setSubmit ] = useState(true);
    
    function handleInputChange(e) {
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    useEffect(() => {
        setErrors(validate({
            ...input,
            genres: selectedGenres,
            platforms: selectedPlatforms
        }))
        setInput({
            ...input,
            genres: selectedGenres.map(g => g.id),
            platforms: selectedPlatforms.map(p => p.id)
        })
    },[selectedGenres, selectedPlatforms])

    useEffect(()=>{
        if(Object.keys(errors).length < 1) setSubmit(false);
        else setSubmit(true)
    },[errors])
    


    // POST /videogame
    let history = useHistory();
    async function handleSubmit(e) {
        axios.post('http://localhost:3001/videogame',input)
            .then(response => history.push(`/videogame/${response.data.id}`))
        setInput(initialState);
        dispatch(setAllPlatformsFalse());
        dispatch(setAllGenresFalse())
        e.preventDefault();
    }

    return (
        <div className={style.container}>
            <form onChange={handleInputChange} className={style.inputs}>
                <div>
                    <div>
                    <label>Nombre:</label>
                    <span>{errors.name}</span>
                    </div>
                    <input type='text' name='name' value={input.name}/>
                </div>
                <div>
                    <div>
                    <label>Descripción:</label>
                    <span>{errors.description}</span>
                    </div>
                    <input type='text' name='description' value={input.description}/>
                </div>
                <div>
                    <div>
                    <label>Lanzamiento:</label>
                    </div>
                    <input type='text' name='released' value={input.released}/>
                </div>
                <div>
                    <div>
                    <label>Rating:</label>
                    </div>
                    <input 
                        type='number' 
                        name='rating'
                        min='1'
                        max='5'
                        step='0.01'
                        value={input.rating}/>
                </div>
                <div>
                    <div>
                        <label>Imagen:</label>
                        <span>{errors.imgUrl}</span>
                    </div>
                    <input type='text' name='imgUrl' value={input.imgUrl}/>
                </div>
            </form>
            <div className={style.selectorsContainer}>
                <div>
                    <span>{errors.genres}</span>
                    <GenreSelector/>
                </div>
                <div>
                    <span>{errors.platforms}</span>
                    <PlatformSelector/>
                </div>
            </div>
            <div className={ !submit ? style.hoverBorder : style.inputDisabled }>
                <input type='submit' value='Subir Juego' 
                    disabled={submit} className={style.submit}
                    onClick={handleSubmit}/>
            </div>
        </div>
    )
}

export default withRouter(PostVideogame);
