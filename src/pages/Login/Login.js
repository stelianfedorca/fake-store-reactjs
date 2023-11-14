import axios from 'axios';
import { useEffect, useState } from 'react';

import { redirect, useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function login() {
    setIsLoading(true);
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username: 'mor_2314',
        password: '83r5^_',
      });

      if (response.data) {
        // navigate('/home');
      }

      setIsLoading(false);
    } catch (error) {
      console.log('error: ', error);
    }
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <p>Login</p>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
}
