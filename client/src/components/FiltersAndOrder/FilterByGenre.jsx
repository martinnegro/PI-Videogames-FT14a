import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { filterByGenre } from '../../redux/actions/videogamesActions'
import { getGenres } from '../../redux/actions/genresActions'


function FilterByGenre() {
    const genres = useSelector(state => state.genresReducer.genres);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        if (genres.length < 1) dispatch(getGenres());
    },[])

    function handleFilter(e) {
            dispatch(filterByGenre(e.target.value))
            e.preventDefault()
        }

    return (
        <div>
            <form onChange={handleFilter}>
                <label>Filtrado por género:</label>
                <select>
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
