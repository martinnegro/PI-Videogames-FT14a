import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles/NavBar.module.scss'
import SearchBar from './SearchBar';
import { useDispatch } from 'react-redux';
import { getVideogames } from '../redux/actions/videogamesActions';

function NavBar() {

    const dispatch = useDispatch()

    return (
        <div className={style.container}>
            <div className={style.links}> 
                <Link to='/' ><div className={style.title}>Home</div></Link>
                <Link to='/site/videogames' onClick={()=>dispatch(getVideogames())}><div>Ver Juegos</div></Link>
                <Link to='/site/postvideogame'><div>Agregar Juego</div></Link>
            </div>
            <SearchBar/>
        </div>
    )
}

export default NavBar;