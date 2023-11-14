import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Home } from '../src/pages/Home';
import { Details } from '../src/pages/Details';
import { Login } from '../src/pages/Login';

import './App.css';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
