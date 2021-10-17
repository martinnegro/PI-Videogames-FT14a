import React from 'react'
import { Link } from 'react-router-dom'
import style from './styles/Home.module.scss'

export default function Home() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <Link to='/site/videogames'>Ver videojuegos</Link>
            </div>
            <div className={style.title}>
                <Link to='/site/postvideogame'>Agregar Videojuego</Link>
            </div>
        </div>
    )
}
