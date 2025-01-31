import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './styles/VideogameDetail.module.scss'
const { REACT_APP_API_URL } = process.env


function VideogameDetail({idDb}) {
    const [ videogame, setVideogame ] = useState();
    const [ error, setError ] = useState();
    useEffect(() => {   
        axios.get(`${REACT_APP_API_URL}/api/videogame/${idDb}`)
        .then(res => {
            setVideogame(res.data);
        })
        .catch((err) => {
            setError(err)
            setVideogame('Hubo un problema en el servidor o no se encontró el videojuego.')
        })
    },[idDb])
    
 
    function textRating({ rating }) {
        const ratingColor = {
            fontWeight: 'bold',
            borderRadius: '2px',
            width: '35%',
            marginLeft: 'auto',
            
            
        }
        rating = parseFloat(rating)
        if ( rating === 5 ) ratingColor.backgroundColor = '#356B8C';
        else if ( rating > 4.5 ) ratingColor.backgroundColor = '#3E5902';
        else if ( rating >   4 ) ratingColor.backgroundColor = '#93A603';
        else if ( rating >   3 ) ratingColor.backgroundColor = '#BF9180';
        else                ratingColor.backgroundColor = '#A61B0F';
        return ratingColor;
    }
    
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

                    <div className={style.specificTwo}>
                            <div>
                                <h5>Lanzamiento:</h5>
                                <p>{videogame.released}</p>
                            </div>
                            <div>
                                <h5 >Rating:</h5>
                                <p style={textRating(videogame)}>{videogame.rating}</p>
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
                        
                        <div className={style.specificOne}>
                            <div className={style.description} 
                                dangerouslySetInnerHTML={{ __html: videogame.description }}>
                            </div>
                            <div className={style.imgContainer}>
                                <img src={videogame.imgUrl} alt={`First of ${videogame.name}`} />
                                <img src={videogame.imgUrlSec} alt={`Second of ${videogame.name}`}/>
                            </div>
                        </div>
                        
                        

                    </div>
                </div>
            }
        </>
    )
}

export default VideogameDetail
