import './Home.css';

import React from 'react';

import Box from '@mui/material/Box';
import CustomersMain2 from '../CRM/CustomersMain2';
export default function Home() {


    return (
        <div className="home-main">
            <h1>Home</h1>
            <CustomersMain2 />

        </div>

    );
}