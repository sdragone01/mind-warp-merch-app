
import './App.css';

import React from 'react';
import { useState, useEffect } from 'react';
import fire from '../../config/Fire';

//page imorts
import NavBar from '../../components/NavBar/NavBar';
import Auth from '../Auth/Auth';

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser('');
      }
    });
  }, []);


  return (
    <div className="App">
      {!user ? (

        <Auth />

      ) : (
        <div className="App">

          <NavBar />

        </div>

      )}
    </div>


  );
}

export default App;
