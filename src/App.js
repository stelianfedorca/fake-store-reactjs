import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Home } from '../src/pages/Home';
import { Details } from '../src/pages/Details';
import { Login } from '../src/pages/Login';

import store from './redux/store';

import './App.css';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
