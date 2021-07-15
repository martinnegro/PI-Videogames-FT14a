import React, { useEffect, useState } from 'react';
import axios from 'axios';

import style from './styles/VideogameDetail.module.scss'

function VideogameDetail({idDb}) {
    const [ videogame, setVideogame ] = useState();
    const [ error, setError ] = useState();
    useEffect(() => {   
        axios.get(`http://localhost:3001/videogame/${idDb}`)
        .then(res => setVideogame(res.data))
        .catch((err) => {
            setError(err)
            setVideogame('Hubo un problema en el servidor o no se encontró el videojuego.')
        })
    },[])
    console.log(videogame)
    // Ruta de detalle de videojuego: debe contener
    // 
    // Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
    // Descripción
    // Fecha de lanzamiento
    // Rating
    // Plataformas
    return (
        <>
            { 
                typeof videogame === 'string' ? 
                <>
                    <div>{videogame}</div>
                    <div>{error.message}</div>
                </> : !videogame ? 
                <div>Cargando</div> :
                
                <div className={style.container}>
                        <h1>
                            {videogame.name}            
                        </h1>
                    <div className={style.data}>
                        <div className={style.specificOne}>
                            <div className={style.description} 
                                dangerouslySetInnerHTML={{ __html: videogame.description }}>
                            </div>
                            <div className={style.imgContainer}>
                                <img src={videogame.imgUrl}/>
                                <img src={videogame.imgUrlSec}/>
                            </div>
                        </div>
                        <div className={style.specificTwo}>
                            <div>
                                <h5>Lanzamiento:</h5>
                                <p>{videogame.released}</p>
                            </div>
                            <div className={style.genres}>
                                <h5>Géneros:</h5>
                                {videogame.genres.map(g => (<p>{g.name}</p>))}
                            </div>
                            <div className={style.platforms}>
                                <h5>Plataformas:</h5>
                                {videogame.platforms.map(g => (<p>{g.name}</p>))}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default VideogameDetail
