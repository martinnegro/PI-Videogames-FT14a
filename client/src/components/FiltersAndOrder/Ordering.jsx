import React, {  } from 'react';
import { useDispatch } from 'react-redux';
import { orderAlph, orderByRating } from '../../redux/actions/videogamesActions';
import { INCREMENT, DECREMENT } from '../../redux/reducers/videogamesReducer';
import style from '../styles/Ordering.module.scss';


function OrderByAlph() {
    const dispatch = useDispatch();
    
    function handleOrder(e) {
        const index = e.target.options.selectedIndex;
        if ( index > 0 && index <= 2 ) dispatch(orderAlph(e.target.value));
        if ( index >= 3 ) dispatch(orderByRating(e.target.value));
        e.preventDefault()
    }

    return (
        <div className={style.container}>
            <form onChange={handleOrder} className={style.form}>
                <label>Ordenado Alfabético:</label>
                <select name='alphabet' >
                    <option defaultValue={undefined}></option>
                    <option value={INCREMENT} id='alph'>A - Z</option>
                    <option value={DECREMENT} id='alph'>Z - A</option>
                    <option value={INCREMENT}>Menor a Mayor</option>
                    <option value={DECREMENT}>Mayor a Menor</option>
                </select>
            </form>
        </div>
    )
};



export default OrderByAlph
