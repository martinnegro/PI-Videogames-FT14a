import React from 'react';
import { useDispatch } from 'react-redux';
import { orderByRating } from '../../redux/actions';
import { INCREMENT, DECREMENT } from '../../redux/reducer'

function OrderByRating() {
    const dispatch = useDispatch();
    
    function handleOrder(e) {
        dispatch(orderByRating(e.target.value))
        e.preventDefault()
    }
    return (
        <div>
            <form onChange={(e) => handleOrder(e)}>
                <label>Ordenado por Rating:</label>
                <select id='rating' name='rating' >
                    <option defaultValue={undefined}></option>
                    <option value={INCREMENT}>Menor a Mayor</option>
                    <option value={DECREMENT}>Mayor a Menor</option>
                </select>
            </form>
        </div>
    )
}

export default OrderByRating
