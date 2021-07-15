import React from 'react'
import OrderByAlph from './FiltersAndOrder/OrderByAlph';
import OrderByRating from './FiltersAndOrder/OrderByRating';
import FilterByGenre from './FiltersAndOrder/FilterByGenre';
import FilterByWord from './FiltersAndOrder/FilterByWord';

import style from './styles/FiltersAndOrder.module.scss'

function FiltersAndOrder() {
    return (
        <div className={style.container}>
        <FilterByWord/>
        <OrderByAlph/>
        <OrderByRating/>
        <FilterByGenre/>
        </div>
    )
}

export default FiltersAndOrder

