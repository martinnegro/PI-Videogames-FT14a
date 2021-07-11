import React from 'react'

function Pagination({setCurrentPage, setElementPerPage,pagination}) {

    const backRed = {
        backgroundColor: 'red'
    }

    const currentPage = pagination.currentPage;
    const lastPage = pagination.lastPage;
    
    return (
        <div>
            <select id='elements' name='elements' onChange={setElementPerPage}>
                <label>Juegos por página</label>
                <option value='10'>10</option>
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
                <input type='button' value={pagination.lastPage}/>
            </form>
        </div>
    )
}

export default Pagination
