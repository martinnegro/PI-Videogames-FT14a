import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles/VideogameCard.module.scss';

function VideogameCard({vg}) {

    const imgBack = {
        backgroundImage: `url(${vg.imgUrl})`
    }

    return (
        <Link to={`/videogame/${vg.id}`}>
        <div className={style.container} style={imgBack}>
            <div className={style.title}>{vg.name}</div>
            <div className={style.genresContainer}>
                {vg.genres.map(genre => <div key={genre.id} className={style.genres}>{genre.name}</div>)}
            </div>
        </div>
        </Link>
    )
}

export default VideogameCard;