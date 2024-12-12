

import React from 'react';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    navigate(`/search?q=${query}`);
  };

  return (
    <>
      <form onSubmit={handleSearch} className="d-flex justify-content-center my-4">
        <div
          className="input-group"
          style={{
            position: 'relative',
            maxWidth: '600px',
            margin: '0 auto',
            bottom: '200px',
          }}
        >
          <input
            type="text"
            name="search"
            className="form-control"
            placeholder="Search articles, insights and trends..."
            style={{
              height: '50px',
              borderRadius: '50px',
              border: '3px solid #7FACFF',
              backgroundColor: '#F0F7FF',
              color: '#333',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: '400',
              fontSize: '20px',
              position: 'relative',
              zIndex: 1, // Ensure the input is above the background
            }}
          />
        </div>
      </form>
    </>
  );
};

export default SearchBar;



