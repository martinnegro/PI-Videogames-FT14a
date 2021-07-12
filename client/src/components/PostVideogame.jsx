import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getGenres, setCheckedGenres, changeCheckedGenres } from '../redux/actions/genresActions';
import style from './styles/PostVideogame.module.scss'


const initialState = { 
    name: '', 
    description: '', 
    released: '', 
    rating: 0, 
    imgUrl: '' ,
    genres: []
}

function PostVideogame() {
    // Trae los géneros del redux y los setea si está vacío
    const dispatch = useDispatch();
    const genres = useSelector(state => state.genresReducer.genres);
    useEffect(()=>{
        if (genres.length < 1) dispatch(getGenres());
    },[])
    const checkedGenres  = useSelector(state => state.genresReducer.checkedGenres);
    const selectedGenres = useSelector(state => state.genresReducer.selectedGenres);
    useEffect(() => {
        dispatch(setCheckedGenres())
    },[genres])

    // Un estado para los input que se enviarán
    const [ input, setInput ] = useState(initialState);
    
    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    function handleCheckbox(position) {
        dispatch(changeCheckedGenres(position))    
    }
    useEffect(() => {
        setInput({
            ...input,
            genres: selectedGenres
        })
    },[selectedGenres])
    
    // POST /videogame
    async function handleSubmit(e) {
        axios.post('http://localhost:3001/videogame',input)
            .then(response => console.log(response))
        setInput(initialState);    
        e.preventDefault();
    }

    return (
        <div className={style.container}>
            <form onChange={handleInputChange}>
                <div>
                    <label>Nombre:</label>
                    <input type='text' name='name' value={input.name}/>
                </div>
                <div>
                    <label>Descripción:</label>
                    <input type='text' name='description' value={input.description}/>
                </div>
                <div>
                    <label>Lanzaminto:</label>
                    <input type='text' name='released' value={input.released}/>
                </div>
                <div>
                    <label>Rating:</label>
                    <input 
                        type='number' 
                        name='rating'
                        min='1'
                        max='5'
                        step='0.01'
                        value={input.rating}/>
                </div>
                <div>
                    <label>Imágen:</label>
                    <input type='text' name='imgUrl' value={input.imgUrl}/>
                </div>
            </form>
            <form className={style.genresContainer} >
                {
                    genres.map((genre, index) => (
                        <div key={genre.id}>
                        <input 
                            type='checkbox'
                            value={genre.id}
                            name={input.genres}
                            checked={checkedGenres[index]}
                            onChange={() => handleCheckbox(index)}
                        /><label>{genre.name}</label>
                        </div>
                    ))
                }
            </form>
            <input type='submit' value='Subir Juego' onSubmit={handleSubmit}/>
        </div>
    )
}

export default PostVideogame;
