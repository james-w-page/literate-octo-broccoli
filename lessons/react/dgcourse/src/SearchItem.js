import React from 'react'

const SearchItem = ({ search, setSearch}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="searchForm">
        <label htmlFor='search'>Search</label>
        <input 
            id='search'
            type='text'
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem