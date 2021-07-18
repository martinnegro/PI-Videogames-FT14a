import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { filterByWord } from '../../redux/actions/videogamesActions';
import { setInputWordFilter } from '../../redux/actions/inputsActions'
import style from '../styles/FilterByWord.module.scss';

function FilterByWord() {
    const input = useSelector(state => state.inputsReducer.inputWordFilter);
    const dispatch = useDispatch();
    function handleInput(e) {
        dispatch(setInputWordFilter(e.target.value))
    }
    useEffect(() => {
        dispatch(filterByWord(input));
    }, [input])

    return (
        <div className={style.container}>
            <label>
                Filtrar por palabra:
                </label>
            
            <input type='text' value={input} onChange={handleInput}/>
        </div>
    )
}

export default FilterByWord
