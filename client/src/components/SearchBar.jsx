import React from 'react';

function SearchBar() {
    return (
        <div>
            <form>
                <input type='text' placeholder='Ingresa palabra clave...'/> 
                <input type='submit' value='Buscar'/>
            </form>
        </div>
    )
};

export default SearchBar;