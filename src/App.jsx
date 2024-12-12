import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImageSection from './components/ImageSection';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <ImageSection />
        <SearchBar />
        <Routes>
          <Route path="/search" element={<h2 className="text-center">Search Results</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
