import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from '../styles/PostVideogame.module.scss'
import { getPlatforms, changeCheckedPlatforms,setAllPlatformsFalse } from '../../redux/actions/platformsActions';

function PlatformSelector() {
    const platforms = useSelector(state => state.platformsReducer.platforms);
    const dispatch = useDispatch();
    useEffect(()=>{
        if (platforms.length < 1) dispatch(getPlatforms());
    },[])
    function handleCheckbox(e) {
        dispatch(changeCheckedPlatforms(e.target.value))    
    }
    
    return (
        <form className={style.genresContainer} >
                {
                    platforms.map((platform, index) => (
                        
                        <label key={platform.id} className={style.optionContainer}>
                            {platform.name}
                        <input 
                            type='checkbox'
                            value={platform.id}
                            // name={input.platforms}
                            checked={platform.check}
                            onChange={handleCheckbox}
                        /><span className={style.checkmark}></span>
                        
                        </label>
                    ))
                }
            </form>
    )
}

export default PlatformSelector;
