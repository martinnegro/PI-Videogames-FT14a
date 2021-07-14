import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles/NavBar.module.scss'
import SearchBar from './SearchBar';

function NavBar() {

    return (
        <div className={style.container}>
            <div className={style.links}> 
                <Link to='/'><div className={style.title}>Henry - Videogames</div></Link>
                <Link to='/videogames'><div>Ver Juegos</div></Link>
                <Link to='/postvideogame'><div>Agregar Juego</div></Link>
            </div>
            <SearchBar/>
        </div>
    )
}

export default NavBar;