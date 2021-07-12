import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import VideogameCard from './VideogameCard';
import Pagination from './Pagination';
import FiltersAndOrder from './FiltersAndOrder'
import style from './styles/Videogames.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getVideogames } from '../redux/actions/videogamesActions';


const Videogames = function() {
    // Trae los juegos del redux
    
    const vgames = useSelector((state) => state.videogamesReducer.videogames);
    const dispatch = useDispatch();
    
    // Controla la paginación 
    const [ pagination, setPagination ] = useState({
        paginatedGames: [],
        elementsPerPage: 10, 
        currentPage: 1,
        lastPage: undefined
    })
    const indexOfLast  = (pagination.elementsPerPage * pagination.currentPage);
    const indexOfFirst = (indexOfLast - pagination.elementsPerPage);
    useEffect(() => {
        setPagination({
            ...pagination,
            paginatedGames: vgames.slice(indexOfFirst, indexOfLast),
            lastPage: Math.ceil(vgames.length / pagination.elementsPerPage)
        })
    },[indexOfFirst, indexOfLast, vgames]);


    function setCurrentPage(e) {
        if (e.target.value !== undefined){
            setPagination({
                ...pagination,
                currentPage: parseInt(e.target.value)
            });
        }
    };
    function setElementPerPage(e) {
        const elementsPerPage = parseInt(e.target.value);
        let currentPage = pagination.currentPage;
        let newLast = Math.ceil(vgames.length / elementsPerPage);
        if (e.target.value !== undefined){
            if (pagination.currentPage > newLast ) currentPage = newLast;
            setPagination({
                ...pagination,
                elementsPerPage,
                currentPage
            })
        }
    }
    
    return (
        <div className={style.container}>
            <input type='button' value='Cargar videojuegos' onClick={()=> dispatch(getVideogames())}/>
            <Pagination 
                setCurrentPage={setCurrentPage} 
                setElementPerPage={setElementPerPage}
                pagination={pagination}
            />
            <FiltersAndOrder/>
            
            <div className={style.vgsContainer}>
                {pagination.paginatedGames.map(vg => 
                    (<VideogameCard key={vg.id} vg={vg}/>)
                )}
            </div>
        </div>
    )
}

export default Videogames;