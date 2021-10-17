import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './styles/Landing.module.scss'

function Landing () {
    const [ mousePos, setMousePos ] = useState({
        right: 0,
        left: 0
    })

    useEffect(()=>{
        const trackMousePos = 
            (value)=>{
                let x = value.clientX;
                let y = value.clientY;
                return setMousePos({
                    WebkitMaskPositionX: x - 125 + 'px', 
                    maskPositionX: x - 125 + 'px',
                    WebkitMaskPositionY: y - 125 + 'px', 
                    maskPositionY: y - 125 + 'px',
                })
            } 
        document.addEventListener('mousemove',trackMousePos)
        return window.removeEventListener('mousemove',trackMousePos)
    },[])

    return (
        <div className={style.supra}>

            <div 
                className={style.cursor}
                ></div>
            <div 
                className={style.container}
                style={mousePos}
            >
                <Link to='/site/videogames'>
                    START
                </Link>
            </div>
        </div>
    )
}

export default Landing;