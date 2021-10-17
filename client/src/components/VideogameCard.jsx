import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles/VideogameCard.module.scss';

function VideogameCard({vg}) {

    const imgBack = {
        backgroundImage: `url(${vg.imgUrl})`
    }

    return (
        <div className={style.container} style={imgBack}>
            <Link to={`/site/videogame/${vg.id}`} className={style.linking}>
                <div className={style.textContainer}>
                    <div className={style.genresContainer}>
                        {vg.genres.map(genre => <span key={genre.id} className={style.genres}>{genre.name}</span>)}
                    </div>
                    <div className={style.title}>{vg.name}</div>
                </div>
            </Link>
        </div>
    )
}

export default VideogameCard;