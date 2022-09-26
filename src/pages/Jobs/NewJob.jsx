import NewJobForm from "../../components/Forms/NewJobForm";


import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from "@mui/x-date-pickers";


export default function NewJob({ children }) {

    return (
        <div className="jobs-main">
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <NewJobForm />
            </LocalizationProvider>
        </div>

    )
}