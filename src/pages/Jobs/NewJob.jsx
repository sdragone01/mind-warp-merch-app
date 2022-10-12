import NewJobForm from "../../components/Forms/NewJobForm";
import React from "react";
import { useState } from "react";

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from "@mui/x-date-pickers";
import './jobstyle.css';
import CustomerForm2 from "../../components/Forms/CustomerForm2";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import fire from "../../config/Fire";
import { getDatabase, ref, set, onValue, push, child, get, query } from "firebase/database";

const db = getDatabase();


export default function NewJob() {



    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'left',
            justifyContent: 'center',
            position: 'relative',
            margin: '10%',
        }}
        >
            <NewJobForm />

        </Box>

    )
}