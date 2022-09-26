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
    return <div></div>;
  }
}
