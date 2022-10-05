import './Home.css';

import React from 'react';

import Box from '@mui/material/Box';
import CustomersMain2 from '../CRM/CustomersMain2';
export default function Home() {


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginLeft: '5%',
            marginTop: '10%',
            justifyContent: 'center',
            alignItems: 'center',

        }}>

            <CustomersMain2 />
        </Box>
    )
}

