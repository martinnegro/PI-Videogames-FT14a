import React from 'react'

function Pagination({setCurrentPage, setElementPerPage, pagination}) {
    const currentPage = pagination.currentPage;
    const lastPage = pagination.lastPage;
    const backRed = {
        backgroundColor: 'red'
    }
    
    return (
        <div>
            <label>Juegos por página</label>
            <select 
                id='elements' 
                name='elements'
                onChange={setElementPerPage}>
                <option dafaultvalue='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
                <option value='25'>25</option>
            </select>
            <form onClick={setCurrentPage}>
                <input type='button' value={`1`} />
                {
                    currentPage < 4 ? <span>..</span> :
                    <input type='button' value={currentPage - 2}/>
                }
                {
                    currentPage < 3 ? <span>..</span> :
                    <input type='button' value={currentPage - 1}/>
                }
                <input type='button' value={currentPage} style={backRed}/>
                {   
                    (lastPage - currentPage) < 2 ? <span>..</span> :
                    <input type='button' value={1 + currentPage}/>
                }
                {
                    (lastPage - currentPage) < 3 ? <span>..</span> :
                    <input type='button' value={2 + currentPage}/>
                }
                <input type='button' value={pagination.lastPage || 1}/>
            </form>
        </div>
    )
}

export default Pagination
