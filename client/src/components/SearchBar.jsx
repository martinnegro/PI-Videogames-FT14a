import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { searchApi }  from '../redux/actions/videogamesActions';

function SearchBar(props) {
    const [ input, setInput ] = useState('');
    const dispatch = useDispatch()
    function handleInput(e) {
        setInput(e.target.value)
    }

    let history = useHistory();
    
    async function handleSubmit(e) {
        dispatch(searchApi(input));
        setInput('');
        e.preventDefault();
        if (history.location.pathname !== '/videogames') history.push('/videogames');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Ingresa palabra clave...'
                        value={input} onChange={handleInput} /> 
                <input type='submit' value='Buscar' />
            </form>
        </div>
    )
};

export default withRouter(SearchBar);