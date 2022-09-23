import React, { Component } from 'react';
import Fire from '../../config/Fire';



export default class NewJob extends Component {
    state = {
        jobName: '',
        jobDescription: '',
        jobType: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        Fire.firestore().collection('jobs').add({
            jobName: this.state.jobName,
            jobDescription: this.state.jobDescription,
            jobType: this.state.jobType,
        }).then(() => {
            this.setState({
                jobName: '',
                jobDescription: '',
                jobType: '',
            })
        }).catch((error) => {
            console.log(error)
        })
    }


    render() {
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="jobName">Job Name</label>
                        <input type="text" id="jobName" className="FormField__Input" placeholder="Enter Job Name" name="jobName" value={this.state.jobName} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="jobDescription">Job Description</label>
                        <input type="text" id="jobDescription" className="FormField__Input" placeholder="Enter Job Description" name="jobDescription" value={this.state.jobDescription} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="jobType">Job Type</label>
                        <input type="text" id="jobType" className="FormField__Input" placeholder="Enter Job Type" name="jobType" value={this.state.jobType} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <button className="FormField__Button mr-20">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}

