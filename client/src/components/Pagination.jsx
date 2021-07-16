import React from 'react'
import style from './styles/Pagination.module.scss'

function Pagination({setCurrentPage, setElementPerPage, pagination}) {
    const currentPage = pagination.currentPage;
    const lastPage = pagination.lastPage;
    
    
    return (
        <div className={style.container}>
            <div className={style.customSelect}>
                <label>Juegos por página</label>
                <select 
                    name='elements'
                    onChange={setElementPerPage}>
                    <option dafaultvalue='10' className={style.option}>10</option>
                    <option value='15'>15</option>
                    <option value='20'>20</option>
                    <option value='25'>25</option>
                </select>
            </div>
            <form className={style.pagination} onClick={setCurrentPage}>
                <input type='button' value={`1`} />
                {
                    currentPage < 4 ? <input type='button' disabled={true} value='..'/> :
                    <input type='button' value={currentPage - 2}/>
                }
                {
                    currentPage < 3 ? <input type='button' disabled={true} value='..'/> :
                    <input type='button' value={currentPage - 1}/>
                }
                <input type='button' value={currentPage} className={style.current}/>
                {   
                    (lastPage - currentPage) < 2 ? <input type='button' disabled={true} value='..'/> :
                    <input type='button' value={1 + currentPage}/>
                }
                {
                    (lastPage - currentPage) < 3 ? <input type='button' disabled={true} value='..'/> :
                    <input type='button' value={2 + currentPage}/>
                }
                <input type='button' value={pagination.lastPage || 1}/>
            </form>
        </div>
    )
}

export default Pagination
