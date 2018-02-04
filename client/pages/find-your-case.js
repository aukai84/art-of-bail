import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import dashboardStyles from '../styles/dashboardStyles.js';
import clientPageStyles from '../styles/clientPageStyles.js';
import findYourCaseStyles from '../styles/findYourCaseStyles.js';
import {Form, FormGroup, FormText, Label, Input, Container, Row, Col, Button} from 'reactstrap';
import AuthService from '../utils/AuthService.js';
import {API_URL} from '../config';
const auth = new AuthService(API_URL);

class FindYourCase extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            case: null,
            caseNumber: '',
            errorMessage: null,
            searchEmpty: false 
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleEnterKey = this.handleEnterKey.bind(this);
        this.findCase = this.findCase.bind(this);
    }

    handleInput(e){
        e.preventDefault();
        this.setState({
            caseNumber: e.target.value
        })
    }
handleEnterKey(e){
        let code = e.keyCode || e.charCode;
        if(code === 13){
            e.preventDefault();
            this.findCase();
        }
    }

    findCase(){
        this.setState({
            isLoading: true
        })
        let caseNumber = this.state.caseNumber
        auth.fetch(`${auth.domain}/client-portal/${caseNumber}`,{method: 'GET'})
            .then(res => {
                if(res.case){
                    this.setState({
                        isLoading:false,
                        case: res.case,
                        searchEmpty: false,
                        searchError: false
                    })
                } else {
                    console.log(res)
                    this.setState({
                        isLoading: false,
                        searchEmpty: true,
                        case: null
                    })
                }
            })
            .catch(err => {
                console.log('error', err)
                this.setState({
                    isLoading: false,
                    searchError: err
                })
            })
    }

    render(){
        return(
            <Layout>
                <div className="find-case-container">
                    <div className="search-container">
                        <Input type="text" id="findCaseInput" placeholder="Enter Your Case Number Here" onKeyDown={this.handleEnterKey} onChange={this.handleInput}/>
                        {this.state.searchEmpty ? (<p className="error-message">Cannot find your case</p>) : this.state.searchError ? (<p className="error-message">Error finding case</p>) : (<div></div>)}
                    </div>
                        <div className="case-window-container">
                            {
                                this.state.case ? (
                                    <div className="table-container">
                                        <div className="client-header">
                                            <h1>{this.state.case.defendantName}</h1>
                                        </div>
                                        <div className="client-header-sub">
                                            <h4>{this.state.case.caseNumber}</h4>
                                            <a href={this.state.case.stateCaseLink}>hawaii.gov</a>
                                        </div>
                                        <h5>Contact Info</h5>
                                        <div className="client-details-container">
                                            <div className="client-details-list">
                                                <ul>
                                                    <li>Phone</li>
                                                    <li>Cosigner</li>
                                                    <li>Cosigner Phone</li>
                                                </ul>
                                                <ul>
                                                    <li>{this.state.case.defendantPhone}</li>
                                                    <li>{this.state.case.cosignerName}</li>
                                                    <li>{this.state.case.cosignerPhone}</li>
                                                </ul>
                                            </div>
                                            <h5>Bail Info</h5>
                                            <div className="client-details-list">
                                                <ul>
                                                    <li>Bail Amount</li>
                                                    <li>Bail Outstanding</li>
                                                    <li>Bail Due</li>
                                                </ul>
                                                <ul>
                                                    <li>${this.state.case.totalBailAmount}</li>
                                                    <li>${this.state.case.totalBailOutstanding}</li>
                                                    <li>{this.state.case.BailPaymentDueDate}</li>
                                                </ul>
                                            </div>
                                            <h5>Court Dates</h5>
                                            <div className="court-dates-container">
                                                {this.state.case.courtDatesList ? this.state.case.courtDatesList.map(item => ( <div className="court-dates-list">
                                                    <ul>
                                                        <li>Court Date</li>
                                                    </ul>
                                                    <ul>
                                                        <li>{item.desc}</li>
                                                        <li>{item.date}</li>
                                                        <li>{item.time}</li>
                                                    </ul>
                                                </div>
                                            )) : (<p>Court dates pending</p>)}
                                            </div>
                                        </div>
                                    </div>
                                ) : this.state.isLoading ? (
                                    <div className="loading-screen">
                                        <h2>Finding case...</h2> 
                                    </div>
                                        ) : (
                                            <div className="find-case-splash">
                                                <h1>Find Your Case!</h1>
                                                <p>court dates</p>
                                                <p>payment information</p>
                                                <p>bail information</p>
                                            </div>
                                        )
                            } 
                        </div>
                    </div>
                    <style jsx global>{dashboardStyles}</style>
                    <style jsx>{clientPageStyles}</style>
                    <style jsx>{findYourCaseStyles}</style>
            </Layout>
        )
    }
}

export default FindYourCase;
