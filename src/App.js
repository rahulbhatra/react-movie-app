import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header/header';
import Home from './components/home';
import Movie from './components/movie';
import NotFound from './components/not-found';

// Styles
import { GlobalStyle } from './global-style';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/:movieId' element={<Movie />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);


export default App;
