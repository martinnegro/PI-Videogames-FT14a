import React from 'react'
import { Link } from 'react-router-dom'
import style from './styles/Home.module.scss'

export default function Home() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <Link to='/videogames'>Ver videojuegos</Link>
            </div>
            <div className={style.title}>
                <Link to='/postvideogame'>Agregar Videojuego</Link>
            </div>
        </div>
    )
}
