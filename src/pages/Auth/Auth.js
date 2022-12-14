import React, { Component } from 'react';
import Login from '../../components/Forms/Login'
import Register from '../../components/Forms/Register'
import fire from '../../config/Fire';
import Spinner from '../../assets/loader.gif';
import Main from '../Main/Main';


import './Auth.css';

export default class Auth extends Component {
    state = {
        user: 1,
        loading: true
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });

            } else {
                this.setState({ user: null });
            }
        });
    }

    formSwitcher = (action) => {
        this.setState({ formSwitcher: action === 'register' ? true : false })
    }

    render() {
        const form = !this.state.formSwitcher ? <Login /> : <Register />

        if (this.state.user === 1) {
            return (
                <div className="FormCenter">
                    <img src={Spinner} alt="Loading..." />
                </div>
            )
        }


        return (
            <div className="mainBlock">
                {form}
                {!this.state.formSwitcher ?
                    (
                        <span className="underLine"> Not registered?
                            <button
                                onClick={() =>
                                    this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')}
                                className="linkBtn">Create an account
                            </button>
                        </span>
                    ) : (
                        <span className="underLine">Have an account already?
                            <button
                                onClick={() =>
                                    this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')}
                                className="linkBtn">Sign in here
                            </button>
                        </span>
                    )
                }
            </div>

        )


    }



}