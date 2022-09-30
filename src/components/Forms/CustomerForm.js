import React, { Component } from "react";
import Fire from "../../config/Fire";

export default class CustomerForm extends Component {

  state = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    contact: "",
    notes: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

  };

  handleSubmit = (e) => {

    e.preventDefault();
    const db = Fire.firestore();
    db.collection("customers").add({
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      phone: this.state.phone,
      email: this.state.email,
      contact: this.state.contact,
      notes: this.state.notes,
    });
    this.setState({
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      phone: "",
      email: "",
      contact: "",
      notes: "",
    });

  };

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </label>
          <label>
            State:
            <input
              type="text"
              name="state"
              value={this.state.state}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Zip:
            <input
              type="text"
              name="zip"
              value={this.state.zip}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Contact:
            <input
              type="text"
              name="contact"
              value={this.state.contact}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Notes:
            <input
              type="text"
              name="notes"
              value={this.state.notes}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );

  }
} 
