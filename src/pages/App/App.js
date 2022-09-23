

//components
import React from 'react';
import { useState, useEffect } from 'react';
import fire from '../../config/Fire';
import { Routes, Route } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';


//page imorts
import NavBar from '../../components/NavBar/NavBar';
import Auth from '../Auth/Auth';

//Route Pages
import Schedule from '../Schedule/Schedule';
import Home from '../Home/Home';
import Art from '../Art/Art';
import Settings from '../Settings/Settings';
import Jobs from '../Jobs/Jobs';

// styles
import './App.css';


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

          <SideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/artwork" element={<Art />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/jobs" element={<Jobs />} />

          </Routes>


        </div>

      )}
    </div>


  );
}

export default App;
