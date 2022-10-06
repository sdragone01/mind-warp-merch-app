//components
import React from "react";
import { useState, useEffect } from "react";
import fire from "../../config/Fire";
import { Routes, Route } from "react-router-dom";
import SideBar2 from "../../components/SideBar/SideBar2";

//page imorts

import Auth from "../Auth/Auth";

//Route Pages

import Schedule from '../Schedule/Schedule';
import Home from '../Home/Home';
import Art from '../Art/Art';
import Settings from '../Settings/Settings';
import Jobs from '../Jobs/Jobs';
import NewJob from '../Jobs/NewJob';

import Customers from "../Customers/Customers";


// styles
import "./App.css";


function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  }, []);

  return (
    <div className="App">
      {!user ? (
        <Auth />
      ) : (
        <div className="App">
          <div className="sidebar">
            <SideBar2 />
          </div>
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/calendar" element={<Schedule />} />
              <Route path="/artwork" element={<Art />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/newjob" element={<NewJob />} />


              <Route path="/customers" element={<Customers />} />



            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
