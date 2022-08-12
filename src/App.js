import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav';
import Books from './pages/books';
import CategoriesPage from './pages/categories';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
        </main>
        <p>
          Patupa is a simple and fast online shopping application that helps users can purchase with no
          cost of delivery and short time delivery. Users can search and purchase any products of their choice
          from this online shopping application. Users can also search for products of their choice.
          Users can also add products to their cart and checkout.
        </p>
      </div>
    </BrowserRouter>
  );
}

export default App;
