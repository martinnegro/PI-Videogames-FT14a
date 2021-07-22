import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByGenre } from '../../redux/actions/videogamesActions'
import { setGenreFilter } from '../../redux/actions/inputsActions';

import style from '../styles/FilterByGenre.module.scss'


function FilterByGenre() {
    const genres = useSelector(state => state.genresReducer.genres);
    const input  = useSelector(state => state.inputsReducer.genreFilter)
    const dispatch = useDispatch();
    
   
    useEffect(()=>{
        dispatch(filterByGenre(parseInt(input)));
    },[input, dispatch])

    function handleFilter(e) {
            dispatch(setGenreFilter(parseInt(e.target.value)));
        }

    return (
        <div className={style.container}>
            <form >
                <label>Filtrado por género:</label>
                <select value={input} onChange={handleFilter}>
                    <option value='-1'>Ninguno</option>
                {   genres.length > 1 ?  genres.map(genre => (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    )) : 'cargando'
                }
                </select>
            </form>
        </div>
    )
}

export default FilterByGenre
