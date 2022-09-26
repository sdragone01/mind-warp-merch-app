

//components
import React from 'react';
import { useState, useEffect } from 'react';
import fire from '../../config/Fire';
import { Routes, Route } from 'react-router-dom';
import SideBar2 from '../../components/SideBar/SideBar2';


//page imorts
import NavBar from '../../components/NavBar/NavBar';
import Auth from '../Auth/Auth';

//Route Pages
import Schedule from '../Schedule/Schedule';
import Home from '../Home/Home';
import Art from '../Art/Art';
import Settings from '../Settings/Settings';
import Jobs from '../Jobs/Jobs';
import NewJob from '../Jobs/NewJob';
import SpJob from '../Jobs/SpJob';
import EmbJob from '../Jobs/EmbJob';
import HpJob from '../Jobs/HpJob';
import CustomJob from '../Jobs/CustomJob';
import CustomersMain from '../CRM/CustomersMain';

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


          <SideBar2 />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/calendar" element={<Schedule />} />
            <Route path="/artwork" element={<Art />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/newjob" element={<NewJob />} />
            <Route path="/spjob" element={<SpJob />} />
            <Route path="/embjob" element={<EmbJob />} />
            <Route path="/hpjob" element={<HpJob />} />
            <Route path="/customjob" element={<CustomJob />} />
            <Route path="/customers" element={<CustomersMain />} />


          </Routes>


        </div>

      )}
    </div>


  );
}

export default App;
