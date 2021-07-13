import React from 'react'
import OrderByAlph from './FiltersAndOrder/OrderByAlph';
import OrderByRating from './FiltersAndOrder/OrderByRating';
import FilterByGenre from './FiltersAndOrder/FilterByGenre';
import FilterByWord from './FiltersAndOrder/FilterByWord';

function FiltersAndOrder() {
    return (
        <>
        <OrderByAlph/>
        <OrderByRating/>
        <FilterByGenre/>
        <FilterByWord/>
        </>
    )
}

export default FiltersAndOrder

