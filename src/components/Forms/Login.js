import React, { Component } from 'react';
import fire from '../../config/Fire';

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
                        onChange={this.handleChange}
                        value={this.state.email}
                        name="email"
                    />
                    <input
                        type="password"
                        className="regField"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        name="password"
                    />
                    <button className="regButton" onClick={this.login}>Login</button>
                </form>
            </div>
        )

    }
}
