import React from 'react'
import OrderByAlph from './FiltersAndOrder/Ordering';
import FilterByGenre from './FiltersAndOrder/FilterByGenre';
import FilterByWord from './FiltersAndOrder/FilterByWord';
import FilterByOrigin from './FiltersAndOrder/FilterByOrigin';

import style from './styles/FiltersAndOrder.module.scss'

function FiltersAndOrder() {
    return (
        <div>
            <div className={style.container}>
                <FilterByWord/>
                <OrderByAlph/>
                <FilterByGenre/>
                <FilterByOrigin/>
            </div>
        </div>
    )
}

export default FiltersAndOrder

