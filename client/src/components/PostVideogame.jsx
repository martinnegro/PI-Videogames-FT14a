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

function validate(input) {
    let errors = {};
    const { name, description, imgUrl } = input
    if(!name) errors.name = 'El nombre es obligatorio';
    if(!description) errors.description = 'La descripción es obligatoria';
    const pattern = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (!imgUrl) errors.imgUrl = 'La url de la imagen es obligatoria';
    else if (!pattern.test(imgUrl)) errors.imgUrl = 'No es una url válida';

    return errors;
}



// A validation function to check if the input is a url
const validateUrl = (url) => {
    const pattern = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return pattern.test(url);
}

// A validation function to check it the input is not empty
const validateInput = (input) => {
    return input.length > 0;
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

    const [ input, setInput ] = useState(initialState);
    const [ errors, setErrors ] = useState([{}]);
    const [ submit, setSubmit ] = useState(true);
    
    function handleInputChange(e) {
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
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

    useEffect(()=>{
        if(Object.keys(errors).length < 1) setSubmit(false);
        else setSubmit(true)
    },[errors])
    
    // POST /videogame
    async function handleSubmit(e) {
        
        axios.post('http://localhost:3001/videogame',input)
            .then(response => console.log(response))
        setInput(initialState);    
        e.preventDefault();
    }

    return (
        <div className={style.container}>
            <form onChange={handleInputChange} className={style.inputs}>
                <div>
                    <div>
                    <label>Nombre:</label>
                    <span>{errors.name}</span>
                    </div>
                    <input type='text' name='name' value={input.name}/>
                </div>
                <div>
                    <div>
                    <label>Descripción:</label>
                    <span>{errors.description}</span>
                    </div>
                    <input type='text' name='description' value={input.description}/>
                </div>
                <div>
                    <div>
                    <label>Lanzamiento:</label>
                    </div>
                    <input type='text' name='released' value={input.released}/>
                </div>
                <div>
                    <div>
                    <label>Rating:</label>
                    </div>
                    <input 
                        type='number' 
                        name='rating'
                        min='1'
                        max='5'
                        step='0.01'
                        value={input.rating}/>
                </div>
                <div>
                    <div>
                        <label>Imagen:</label>
                        <span>{errors.imgUrl}</span>
                    </div>
                    <input type='text' name='imgUrl' value={input.imgUrl}/>
                </div>
            </form>
            <form className={style.genresContainer} >
                {
                    genres.map((genre, index) => (
                        
                        <label key={genre.id} className={style.optionContainer}>
                            {genre.name}
                        <input 
                            type='checkbox'
                            value={genre.id}
                            name={input.genres}
                            checked={checkedGenres[index]}
                            onChange={() => handleCheckbox(index)}
                        /><span className={style.checkmark}></span>
                        
                        </label>
                    ))
                }
            </form>
            <div className={ !submit ? style.hoverBorder : style.inputDisabled }>
                <input type='submit' value='Subir Juego' 
                    disabled={submit} className={style.submit}
                    onClick={handleSubmit}/>
            </div>
        </div>
    )
}

export default PostVideogame;
