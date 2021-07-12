import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <Link to='/videogames'><h3>Ver videojuegos</h3></Link>
            <Link to='/postvideogame'><h3>Agregar Videojuego</h3></Link>
        </div>
    )
}
