import React from 'react'

const SearchItems = ({searchInput, setSearchInput}) => {
  return (
    
    <form className='searchItems' onSubmit={(e) => e.preventDefault()}>
        
        <div className='searchArea'>
            <input type = "text" 
            placeholder='Enter some text..'
            name='searchInput'
            className='searchInput'
            value={searchInput}
            onChange = {(e) => setSearchInput(e.target.value)}
            />
        </div>
        
    </form>

  )
}

export default SearchItems