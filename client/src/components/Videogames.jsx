import React from 'react';
import { Link } from 'react-router-dom';

import VideogameCard from './VideogameCard';
import style from './styles/Videogames.module.scss'

import { useSelector, useDispatch } from 'react-redux';
import { getVideogames } from '../redux/actions';


const Videogames = function() {
    
    const vgames = useSelector((state) => state.videogames);
    const dispatch = useDispatch();

    return (
        <>
            <input type='button' value='Cargar videojuegos' onClick={()=> dispatch(getVideogames())}/>
            <div className={style.container}>
            {vgames.map(vg => 
                (<VideogameCard vg={vg}/>)
            )}
            </div>
        </>
    )
}

export default Videogames;