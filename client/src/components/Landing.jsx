import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './styles/Landing.module.scss'

function Landing () {
    const [ mousePos, setMousePos ] = useState({
        right: 0,
        left: 0
    })

    useEffect(()=>{
        console.log(window)
        const trackMousePos = 
            (value)=>{
                let x = value.clientX || value.touches[0].clientX;
                let y = value.clientY || value.touches[0].clientY;
                
                value.preventDefault()
                return setMousePos({
                    WebkitMaskPositionX: x - 125 + 'px', 
                    maskPositionX: x - 125 + 'px',
                    WebkitMaskPositionY: y - 125 + 'px', 
                    maskPositionY: y - 125 + 'px',
                })
            }
        const event = 'ontouchstart' in window ? 'touchmove' : 'mousemove';
        document.addEventListener(event,trackMousePos)
        return () => document.removeEventListener(event,trackMousePos);
    },[])

    return (
        <div className={style.container}>
            <div className={style.supra}>
                <div 
                    className={style.container}
                    style={mousePos}
                >
                    <Link to='/site/videogames'>
                        START
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing;