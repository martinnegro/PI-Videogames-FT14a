import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { filterByGenre } from '../../redux/actions'


function FilterByGenre() {
    const [ genres, setGenres ] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:3001/genres')
            .then(response => {
                const res = response.data;
                setGenres(res);
            })
            .catch(err => console.log(err))
    },[])
   
    const dispatch = useDispatch();
    function handleFilter(e) {
            dispatch(filterByGenre(e.target.value))
            e.preventDefault()
        }

    return (
        <div>
            <form onChange={handleFilter}>
                <label>Filtrado por género:</label>
                <select>
                {   genres ?  genres.map(genre => (
                        <option key={genre.id} value={genre.name}>{genre.name}</option>
                    )) : 'cargando'
                }
                </select>
            </form>
        </div>
    )
}

export default FilterByGenre
