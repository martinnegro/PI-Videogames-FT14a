import React from 'react'
import style from './styles/VideogameCard.module.scss'

function VideogameCard({vg}) {

    const imgBack = {
        backgroundImage: `url(${vg.imgUrl})`
    }

    return (
        <div key={vg.id} className={style.container} style={imgBack}>
            <div className={style.title}>{vg.name}</div>
            <div className={style.genresContainer}>
                {vg.genres.map(genre => <div className={style.genres}>{genre.name}</div>)}
            </div>
        </div>
    )
}

export default VideogameCard;