import React, { Component } from 'react';
import fire from '../../config/Fire';
import './From.css'
export default class Login extends Component {
    state = {
        email: '',
        password: '',
        fireErrors: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
            this.setState({ fireErrors: error.message })

        })
    }

    render() {

        let errorNotification = this.state.fireErrors ? (
            <div className="Error">{this.state.fireErrors}</div>
        ) : null;

        return (
            <div className="FormCenter">
                {errorNotification}
                <form>
                    <input
                        type="text"
                        className="regField"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        name="email"
                    />

                    <input
                        type="password"
                        className="regField"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        name="password"
                    />

                    <input type="submit" onClick={this.login} className="submitBtn" value="LOGIN" />

                </form>
            </div>
        )

    }
}
