import React  from 'react';

import { useDispatch } from 'react-redux';
import { filterByOrigin } from '../../redux/actions/videogamesActions'


import style from '../styles/FilterByGenre.module.scss'


function FilterByOrigin() {
    const dispatch = useDispatch();

    function handleFilter(e) {
            dispatch(filterByOrigin(e.target.value))
            e.preventDefault()
        }

    return (
        <div className={style.container}>
            <form onChange={handleFilter}>
                <label>Filtrado por origen:</label>
                <select>
                    <option value='-1'>Ninguno</option>
                    <option value='API'>API</option>
                    <option value='USER'>Usuario</option>
                </select>
            </form> 
        </div>
    )
}

export default FilterByOrigin;
