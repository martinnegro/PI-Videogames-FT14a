import React from 'react'
import OrderByAlph from './FiltersAndOrder/OrderByAlph';
import OrderByRating from './FiltersAndOrder/OrderByRating';
import FilterByGenre from './FiltersAndOrder/FilterByGenre';

function FiltersAndOrder() {
    return (
        <>
        <OrderByAlph/>
        <OrderByRating/>
        <FilterByGenre/>
        </>
    )
}

export default FiltersAndOrder

