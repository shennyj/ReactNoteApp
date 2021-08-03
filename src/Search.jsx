import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
function Search(props){
    function handleSearch(e){
        const searchValue=e.target.value
        return props.handleSearch(searchValue)
    }
    return(
        <div className='search'>
            <SearchIcon className='search-icons'></SearchIcon>
            <input 
                onChange={handleSearch}
                type='text' 
                placeholder='Search...'/>
        </div>
    )

}

export default Search