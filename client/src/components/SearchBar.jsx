import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { restoreValues } from '../redux/actions/inputsActions';
import { searchApi }  from '../redux/actions/videogamesActions';
import style from './styles/SearchBar.module.scss'

function SearchBar(props) {
    const [ input, setInput ] = useState('');
    const dispatch = useDispatch()
    function handleInput(e) {
        setInput(e.target.value)
    }

    let history = useHistory();
    
    async function handleSubmit(e) {
        dispatch(searchApi(input));
        dispatch(restoreValues())
        setInput('');
        e.preventDefault();
        if (history.location.pathname !== '/videogames') history.push('/videogames');
    }

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Ingresa palabra clave...'
                        value={input} onChange={handleInput} /> 
                <input type='submit' value='Buscar' />
            </form>
        </div>
    )
};

export default withRouter(SearchBar);