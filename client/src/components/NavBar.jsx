import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles/NavBar.module.scss'
import SearchBar from './SearchBar';

function NavBar() {

    return (
        <div className={style.container}>
            <span>Henry - Videogames</span>
            <Link to='/'><span>Home</span></Link>
            <SearchBar/>
        </div>
    )
}

export default NavBar;