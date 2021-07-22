import React, { useEffect }  from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { filterByOrigin } from '../../redux/actions/videogamesActions';
import { setOriginFilter } from '../../redux/actions/inputsActions';


import style from '../styles/FilterByGenre.module.scss'


function FilterByOrigin() {
    const input = useSelector(state => state.inputsReducer.originFilter)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(filterByOrigin(input))
    },[input, dispatch])

    function handleFilter(e) {
        dispatch(setOriginFilter(e.target.value))
    }

    return (
        <div className={style.container}>
            <form >
                <label>Filtrado por origen:</label>
                <select value={input} onChange={handleFilter}>
                    <option value='-1'>Ninguno</option>
                    <option value='API'>API</option>
                    <option value='USER'>Usuario</option>
                </select>
            </form> 
        </div>
    )
}

export default FilterByOrigin;
