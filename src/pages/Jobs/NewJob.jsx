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



export default function NewJob({ children }) {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const toggleOpen = () => {
        setOpen(!open);
    }


    const [sCounter, setSCounter] = useState(0);
    const [eCounter, setECounter] = useState(0);
    const [hCounter, setHCounter] = useState(0);
    const [cCounter, setCCounter] = useState(0);

    const handleClick = (e) => {
        setOpen(false)

        if (e.target.name === "Screen") {
            setSCounter(sCounter + 1);
        }
        if (e.target.name === "Emb") {
            setECounter(eCounter + 1);
        }
        if (e.target.name === "Heat") {
            setHCounter(hCounter + 1);
        }
        if (e.target.name === "Custom") {
            setCCounter(cCounter + 1);
        }

    }






    return (
        <>
            <h1 className="nj-head">New Job</h1>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div className="newjob">

                    <div className="js-crm">
                        <h3>Customer</h3>
                        <CustomerForm2 />
                    </div>
                    <div className="js-container">
                        <h3>Job Details</h3>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                            <NewJobForm />
                        </LocalizationProvider>
                    </div>
                </div>
                <Button
                    sx={{ mt: 3, mb: 2, position: 'relative' }}
                    variant="contained" color="primary" className="js-btn" onClick={handleOpen}> add Item </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 800,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,



                    }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', columnGap: 5 }}>

                            <Button variant="contained" color="primary" className="js-btn" name="Screen" onClick={handleClick}> Screen Print </Button>
                            <Button variant="contained" color="primary" className="js-btn" name='Emb' onClick={handleClick}> Embroidery </Button>
                            <Button variant="contained" color="primary" className="js-btn" name='Heat' onClick={handleClick}> Heat Press </Button>
                            <Button variant="contained" color="primary" className="js-btn" name='Custom' onClick={handleClick}> Custom </Button>

                        </Box>
                    </Box>

                </Modal>
                <div className="screen-Print-form-counter">
                    {Array.from(Array(sCounter)).map((e, i) => {
                        return (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', columnGap: 5 }}>

                                <h1>Screen Print Form Goes Here</h1>
                            </Box>
                        )
                    })}
                </div>

                <div className="embroidery-form-counter">
                    {Array.from(Array(eCounter)).map((e, i) => {
                        return (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', columnGap: 5 }}>
                                <h1>Embroidery Form Goes Here</h1>
                            </Box>
                        )
                    })}
                </div>

                <div className="heat-press-form-counter">
                    {Array.from(Array(hCounter)).map((e, i) => {
                        return (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', columnGap: 5 }}>
                                <h1>Heat Press Form Goes Here</h1>
                            </Box>
                        )
                    })}
                </div>

                <div className="custom-form-counter">
                    {Array.from(Array(cCounter)).map((e, i) => {
                        return (
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', columnGap: 5 }}>
                                <h1>Custom Form Goes Here</h1>

                            </Box>
                        )
                    })}
                </div>



            </Box>


        </>


    )
}