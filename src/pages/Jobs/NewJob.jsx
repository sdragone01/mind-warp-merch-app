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




export default function NewJob() {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    const [jobArray, setJobArray] = useState([]);
    const [sCounter, setSCounter] = useState(0);
    const [eCounter, setECounter] = useState(0);
    const [hCounter, setHCounter] = useState(0);
    const [cCounter, setCCounter] = useState(0);


    const addJob = (e) => {

        handleClose()
        if (e.target.name === "s") {
            jobArray.push('s')
        } if (e.target.name === "e") {
            jobArray.push('e')
        }
        if (e.target.name === "h") {
            jobArray.push('h')
        }
        if (e.target.name === "c") {
            jobArray.push('c')
        }
        setJobArray(jobArray)
        console.log(jobArray)
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

                            <Button variant="contained" color="primary" className="js-btn" name="s" onClick={addJob}> Screen Print </Button>
                            <Button variant="contained" color="primary" className="js-btn" name="e" onClick={addJob}> Embroidery </Button>
                            <Button variant="contained" color="primary" className="js-btn" name="h" onClick={addJob}> Heat Press </Button>
                            <Button variant="contained" color="primary" className="js-btn" name="c" onClick={addJob}> Custom </Button>


                        </Box>
                    </Box>


                </Modal>



                <div className="js-forms">
                    {jobArray.map((form) => {
                        if (form === 's') {
                            return (
                                <div className="js-form">
                                    <h3>Screen Print Form Here</h3>
                                </div>
                            )

                        }
                        if (form === 'e') {
                            return (
                                <div className="js-form">
                                    <h3>Embroidery Form Here</h3>
                                </div>
                            )

                        }
                        if (form === 'h') {
                            return (
                                <div className="js-form">
                                    <h3>Heat Press Form Here</h3>
                                </div>
                            )
                        }
                        if (form === 'c') {
                            return (
                                <div className="js-form">
                                    <h3>Custom Form Here</h3>
                                </div>
                            )
                        }
                    })}
                </div>




            </Box>


        </>


    )
}