import React, { useState } from 'react';


const Search = (props) => {

  const onChange = ( e ) => {
    props.setSearchTerm( e.target.value )
    props.setPage(1)
}

  return (
    <div className=''>
      <form className="d-flex mb-2 justify-content-center" role="search">
        <input
          className="form-control flex-grow-1"
          type="search"
          name={props.name}
          placeholder="Search"
          aria-label="Search"
          value={props.searchTerm}
          onChange={ onChange }
        />
      </form>
   
  </div>
  )
};

export default Search;
