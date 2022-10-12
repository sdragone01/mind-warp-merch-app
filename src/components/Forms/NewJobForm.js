import { bool } from 'prop-types';
import React, { Component } from 'react';
import fire from '../../config/Fire';
import { getDatabase, push, ref, onValue } from 'firebase/database';
import DatePicker from './DatePicker/DatePicker';

//MUI

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

import './NewJobForm.css'
import { display } from '@mui/system';




export default class NewJobForm extends Component {
    state = {
        po: '',
        deliveryMethod: bool,
        created: {},
        prodDue: [],
        customerDue: '',
        customer: '',
        job: '',

    }



    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const db = getDatabase();
        const { po, deliveryMethod, created, prodDue, customerDue, customer, job } = this.state;
        push(ref(db, 'Jobs/'), {
            po,
            deliveryMethod,
            created,
            prodDue,
            customerDue,
            customer,
            job,
        });
        this.setState({
            po: '',
            deliveryMethod: bool,
            created: {},
            prodDue: [],
            customerDue: '',
            customer: {},
            job: '',

        });
    }


    selectCustomer = (e) => {
        this.setState({ customer: e.target.value });
    }


    customersList = () => {
        const db = getDatabase();
        const customersRef = ref(db, 'Customers/');
        onValue(customersRef, (snapshot) => {
            const data = snapshot.val();
            const customers = Object.values(data);
            const customersList = customers.map((customer) => {
                return (
                    <MenuItem value={customer}>{customer.name}</MenuItem>
                )
            })
            this.setState({ customersList });
        })
    }
    s







    render() {
        return (
            <Box
                component="form"
                sx={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', maxWidth: '400px', padding: '20px', rowGap: 2,
                }}

                noValidate
                autoComplete="off"
                onSubmit={this.handleSubmit}
            >

                <TextField
                    id="outlined-basic"
                    label="PO"
                    variant="outlined"
                    name="po"
                    value={this.state.po}
                    onChange={this.handleChange}
                />

                <FormControl  >
                    <InputLabel id="demo-simple-select-label">Customer</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.customer}
                        label="Customer"
                        onChange={this.selectCustomer}
                    >
                        {this.customersList()}


                    </Select>
                </FormControl>

                <FormControl  >
                    <InputLabel id="demo-simple-select-label">Delivery Method</InputLabel>
                    <Select

                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.deliveryMethod}
                        label="Delivery Method"
                        name="deliveryMethod"
                        onChange={this.handleChange}
                    >

                        <MenuItem value={true}>Delivery</MenuItem>
                        <MenuItem value={false}>Pickup</MenuItem>
                    </Select>
                </FormControl>


                <DatePicker

                    label="Created"
                    name="created"
                    value={this.state.created}
                    onChange={this.handleChange}
                />

                <DatePicker

                    label="Production Due"
                    name="prodDue"
                    value={this.state.prodDue}
                    onChange={this.handleChange}
                />

                <DatePicker

                    label="Customer Due"
                    name="customerDue"
                    value={this.state.customerDue}
                    onChange={this.handleChange}
                />

                <Button variant="contained" type="submit">Submit</Button>


            </Box >
        )

    }



}
