import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderAlph, orderByRating } from '../../redux/actions/videogamesActions';
import { setSelectOrder } from '../../redux/actions/inputsActions';
import { INCREMENT, DECREMENT } from '../../redux/reducers/videogamesReducer';
import style from '../styles/Ordering.module.scss';


function OrderByAlph() {
    const input = useSelector(select => select.inputsReducer.selectOrder);
    const dispatch = useDispatch();

    function handleOrder(e) {
        dispatch(setSelectOrder(parseInt(e.target.value)))
    }
    useEffect(() => {
        const selected = parseInt(input);
        if ( selected === 1 ) dispatch(orderAlph(INCREMENT));
        if ( selected === 2 ) dispatch(orderAlph(DECREMENT));
        if ( selected === 3 ) dispatch(orderByRating(INCREMENT));
        if ( selected === 4 ) dispatch(orderByRating(DECREMENT));
    },[input, dispatch])

    return (
        <div className={style.container}>
            <form  className={style.form} >
                <label>Ordenar:</label>
                <select name='alphabet' value={input} onChange={handleOrder}>
                    <option value={0}></option>
                    <option value={1}>A - Z</option>
                    <option value={2}>Z - A</option>
                    <option value={3}>Menor a Mayor Rating</option>
                    <option value={4}>Mayor a Menor Rating</option>
                </select>
            </form>
        </div>
    )
};



export default OrderByAlph
