import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Categories from './components/Categories';
import Books from './components/Books';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books/>} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default App;