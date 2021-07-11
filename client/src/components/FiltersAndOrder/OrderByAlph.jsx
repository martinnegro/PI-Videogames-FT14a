import React, {  } from 'react';
import { useDispatch } from 'react-redux';
import { orderAlph } from '../../redux/actions';
import { INCREMENT, DECREMENT } from '../../redux/reducer'


function OrderByAlph() {
    const dispatch = useDispatch();
    
    function handleOrder(e) {
        dispatch(orderAlph(e.target.value))
        e.preventDefault()
    }

    return (
        <div>
            <form onChange={(e) => handleOrder(e)}>
                <label>Ordenado Alfabético:</label>
                <select id='alphabet' name='alphabet' >
                    <option defaultValue={undefined}></option>
                    <option value={INCREMENT}>A - Z</option>
                    <option value={DECREMENT}>Z - A</option>
                </select>
            </form>
        </div>
    )
};



export default OrderByAlph
