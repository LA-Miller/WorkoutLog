import React, { useState, useEffect } from 'react';
import Sitebar from './home/Navbar';

function App() {
  const [sessionToken, setSessionToken] = useState(''); //1

  useEffect(() => { //2
    setSessionToken(localStorage.getItem('token'));

  }, [])

  const updateToken = (newToken) => { //3
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);

  }

  return (
    <div>
      <Sitebar />

    </div>
  );
}

export default App;
