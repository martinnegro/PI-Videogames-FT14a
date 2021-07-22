import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import style from '../styles/PostVideogame.module.scss'
import { changeCheckedGenres } from '../../redux/actions/genresActions';

function GenreSelector() {
    const genres = useSelector(state => state.genresReducer.genres);
    const dispatch = useDispatch();
    function handleCheckbox(e) {
        dispatch(changeCheckedGenres(e.target.value))    
    }
    return (
        <form className={style.genresContainer} >
                {
                    genres.map((genre ) => (
                        
                        <label key={genre.id} className={style.optionContainer}>
                            {genre.name}
                        <input 
                            type='checkbox'
                            value={genre.id}
                            // name={input.genres}
                            checked={genre.check}
                            onChange={handleCheckbox}
                        /><span className={style.checkmark}></span>
                        
                        </label>
                    ))
                }
            </form>
    )
}

export default GenreSelector
