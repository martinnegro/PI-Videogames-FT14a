import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import VideogameCard from './VideogameCard';
import Pagination from './Pagination';
import FiltersAndOrder from './FiltersAndOrder'
import style from './styles/Videogames.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getVideogames } from '../redux/actions/videogamesActions';
import { restoreValues } from '../redux/actions/inputsActions';


const Videogames = function() {
    // Trae los juegos del redux
    const vgamesStore = useSelector((state) => state.videogamesReducer.videogames);
    const isFetching  = useSelector((state) => state.videogamesReducer.isFetching);
    const network     = useSelector((state) => state.videogamesReducer.network);
    const dispatch = useDispatch();
    const [ vgames, setVgames] = useState([])

    useEffect(() => {
        let aux = [];
        vgamesStore.forEach(vg => { if (vg.checkGenre && vg.checkWord && vg.checkOrigin) aux.push(vg)});
        setVgames(aux);
    },[vgamesStore])

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
        if (vgames){
            let currentPage = pagination.currentPage;
            let newLast = Math.ceil(vgames.length / pagination.elementsPerPage);
            if (newLast === 0 ) newLast = 1;
            if (currentPage > newLast) currentPage = newLast;
            setPagination({
                ...pagination,
                paginatedGames: vgames.slice(indexOfFirst, indexOfLast),
                lastPage: newLast,  
                currentPage
            })
        }
    },[indexOfFirst, indexOfLast, vgames]);


    function setCurrentPage(e) {
        if (e.target.value !== undefined && vgames){
            setPagination({
                ...pagination,
                currentPage: parseInt(e.target.value)
            });
        }
    };
    function setElementPerPage(e) {
        if (vgames){
            const elementsPerPage = parseInt(e.target.value);
            let currentPage = pagination.currentPage;
            let newLast = Math.ceil(vgames.length / elementsPerPage);
            if (e.target.value !== undefined){
                if (currentPage > newLast ) currentPage = newLast;
                setPagination({
                    ...pagination,
                    elementsPerPage,
                    currentPage
                })
            }
        }
    }

    function handleReload() {
        dispatch(getVideogames());
        dispatch(restoreValues());
    }
    
    return (
        <div className={style.container}>
            <div className={style.hoverBorder}>
            <input className={style.reloadButton} type='button' value='Recargar videojuegos' onClick={handleReload}/>
            </div>
            <div className={style.info}>
                <FiltersAndOrder className={style.filters}/>
                <div className={style.PaginationAndGames}>
                    {
                        isFetching ? <div>CARGANDO</div> :
                        Object.keys(network).length > 0  ? <div>{network.message}</div> :
                        vgames.length === 0 ? <div>No se encontraron juegos. Prueba con el buscador de arriba.</div> :
                        <>
                        <Pagination 
                            setCurrentPage={setCurrentPage} 
                            setElementPerPage={setElementPerPage}
                            pagination={pagination}
                        />
                        {
                            <div className={style.vgsContainer}>
                                { pagination.paginatedGames.map(vg => (<VideogameCard key={vg.id} vg={vg}/>)) }
                            </div>
                        }
                        </>
                    }   
                </div>
            </div>
        </div>
    )
}

export default Videogames;