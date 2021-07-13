import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { filterByWord } from '../../redux/actions/videogamesActions'

function FilterByWord() {
    const [ input, setInput] = useState('');
    const dispatch = useDispatch();
    function handleInput(e) {
        setInput(e.target.value)
    }
    useEffect(() => {
        dispatch(filterByWord(input));
    }, [input])

    return (
        <div>
            <input type='text' value={input} onChange={handleInput}/>
        </div>
    )
}

export default FilterByWord
