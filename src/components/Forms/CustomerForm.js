import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import fire from "../../config/Fire";
import { useState, Component } from "react";

export default class CustomerForm extends Component {
  state = {
    CompanyName: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    previousOrders: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.value]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const db = fire.firestore();
    db.collection("customers").add({
      CompanyName: this.state.CompanyName,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      country: this.state.country,
      previousOrders: this.state.previousOrders,
    });
    this.setState({
      CompanyName: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      previousOrders: [],
    });
  };

  render() {
    return (
      <div>
        <form className="form-container">
          <TextField
            id="CompanyName"
            label="Company Name"
            variant="outlined"
            value={this.state.CompanyName}
            onChange={this.handleChange}
          />
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <TextField
            id="phone"
            label="Phone"
            variant="outlined"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <TextField
            id="city"
            label="City"
            variant="outlined"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <Select
            id="state"
            label="State"
            variant="outlined"
            value={this.state.state}
            onChange={this.handleChange}
          >
            <MenuItem value="AL">Alabama</MenuItem>
            <MenuItem value="AK">Alaska</MenuItem>
            <MenuItem value="AZ">Arizona</MenuItem>
            <MenuItem value="AR">Arkansas</MenuItem>
            <MenuItem value="CA">California</MenuItem>
            <MenuItem value="CO">Colorado</MenuItem>
            <MenuItem value="CT">Connecticut</MenuItem>
            <MenuItem value="DE">Delaware</MenuItem>
            <MenuItem value="DC">District Of Columbia</MenuItem>
            <MenuItem value="FL">Florida</MenuItem>
            <MenuItem value="GA">Georgia</MenuItem>
            <MenuItem value="HI">Hawaii</MenuItem>
            <MenuItem value="ID">Idaho</MenuItem>
            <MenuItem value="IL">Illinois</MenuItem>
            <MenuItem value="IN">Indiana</MenuItem>
            <MenuItem value="IA">Iowa</MenuItem>
            <MenuItem value="KS">Kansas</MenuItem>
            <MenuItem value="KY">Kentucky</MenuItem>
            <MenuItem value="LA">Louisiana</MenuItem>
            <MenuItem value="ME">Maine</MenuItem>
            <MenuItem value="MD">Maryland</MenuItem>
            <MenuItem value="MA">Massachusetts</MenuItem>
            <MenuItem value="MI">Michigan</MenuItem>
            <MenuItem value="MN">Minnesota</MenuItem>
            <MenuItem value="MS">Mississippi</MenuItem>
            <MenuItem value="MO">Missouri</MenuItem>
            <MenuItem value="MT">Montana</MenuItem>
            <MenuItem value="NE">Nebraska</MenuItem>
            <MenuItem value="NV">Nevada</MenuItem>
            <MenuItem value="NH">New Hampshire</MenuItem>
            <MenuItem value="NJ">New Jersey</MenuItem>
            <MenuItem value="NM">New Mexico</MenuItem>
            <MenuItem value="NY">New York</MenuItem>
            <MenuItem value="NC">North Carolina</MenuItem>
            <MenuItem value="ND">North Dakota</MenuItem>
            <MenuItem value="OH">Ohio</MenuItem>
            <MenuItem value="OK">Oklahoma</MenuItem>
            <MenuItem value="OR">Oregon</MenuItem>
            <MenuItem value="PA">Pennsylvania</MenuItem>
            <MenuItem value="RI">Rhode Island</MenuItem>
            <MenuItem value="SC">South Carolina</MenuItem>
            <MenuItem value="SD">South Dakota</MenuItem>
            <MenuItem value="TN">Tennessee</MenuItem>
            <MenuItem value="TX">Texas</MenuItem>
            <MenuItem value="UT">Utah</MenuItem>
            <MenuItem value="VT">Vermont</MenuItem>
            <MenuItem value="VA">Virginia</MenuItem>
            <MenuItem value="WA">Washington</MenuItem>
            <MenuItem value="WV">West Virginia</MenuItem>
            <MenuItem value="WI">Wisconsin</MenuItem>
            <MenuItem value="WY">Wyoming</MenuItem>
          </Select>
          <TextField
            id="zip"
            label="Zip"
            variant="outlined"
            value={this.state.zip}
            onChange={this.handleChange}
          />
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            value={this.state.country}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
