import NewJobForm from "../../components/Forms/NewJobForm";


import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from "@mui/x-date-pickers";
import './jobstyle.css';
import CustomerForm2 from "../../components/Forms/CustomerForm2";

export default function NewJob({ children }) {

    return (
        <>
            <h1 className="nj-head">New Job</h1>
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
        </>


    )
}