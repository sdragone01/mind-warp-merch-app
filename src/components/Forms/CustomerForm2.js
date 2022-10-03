import React, { Component } from "react";
import Fire from "../../config/Fire";
import { AddressAutofill } from "@mapbox/search-js-react";
//MUI

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

export default class CustomerForm2 extends Component {
  state = {
    address: "",
    apartment: "",
    city: "",
    state: "",
    country: "",
    postcode: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const db = Fire.firestore();
    db.collection("customers").add({
      address: this.state.address,
      apartment: this.state.apartment,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      postcode: this.state.postcode,
    });
    this.setState({
      address: "",
      apartment: "",
      city: "",
      state: "",
      country: "",
      postcode: "",
    });
  };

  render() {
    return (
      <>
        <AddressAutofill
          accessToken={
            "pk.eyJ1Ijoic2RyYWdvbmUwMSIsImEiOiJjbDhvbnhnaGoxaDNzM3ZvZ24yMDFuZ3RhIn0.nxfRfhk5TMRi2zw_OCSX2w"
          }
        >
          <Box
            className="customer-form"
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
              maxWidth: "400px",
              padding: "20px",
              rowGap: 2,
            }}
            noValidate
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              name="address"
              autoComplete="shipping address-line1"
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
            />

            <TextField
              id="outlined-basic"
              label="Apartment"
              variant="outlined"
              type="text"
              name="apartment"
              placeholder="Apartment"
              onChange={this.handleChange}
              value={this.state.apartment}
              autoComplete="shipping address-line2"
            />

            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              type="text"
              name="city"
              placeholder="City"
              onChange={this.handleChange}
              value={this.state.city}
              autoComplete="shipping address-level2"
            />

            <TextField
              id="outlined-basic"
              label="State"
              variant="outlined"
              type="text"
              name="state"
              placeholder="State"
              onChange={this.handleChange}
              value={this.state.state}
              autoComplete="shipping address-level1"
            />

            <TextField
              id="outlined-basic"
              label="Country"
              variant="outlined"
              type="text"
              name="country"
              placeholder="Country"
              onChange={this.handleChange}
              value={this.state.country}
              autoComplete="shipping country"
            />

            <TextField
              id="outlined-basic"
              label="Postcode"
              variant="outlined"
              type="text"
              name="postcode"
              placeholder="Postcode"
              onChange={this.handleChange}
              value={this.state.postcode}
              autoComplete="shipping postal-code"
            />
            <Button
              variant="contained"
              type="submit"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </AddressAutofill>
      </>
    );
  }
}
