import './Jobs.css';
import NewJob from '../../components/Forms/NewJob';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

export default function Jobs() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const body = (
        <div className="modal">
            <NewJob />
        </div>
    );



    return (
        <div className="jobs-main">
            <h1>Jobs</h1>
            <button onClick={handleOpen}>New Job</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {body}
            </Modal>
        </div>
    );

}