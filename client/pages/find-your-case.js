import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import {Form, FormGroup, FormText, Label, Input, Container, Row, Col, Button} from 'reactstrap';
import ReactLoading from 'react-loading';
import AuthService from '../utils/AuthService.js';
const auth = new AuthService(process.env.API_URL);

class FindYourCase extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            case: null
        }
        this.findCase= this.findCase.bind(this);
    }

    findCase(e){
        e.preventDefault();
        this.setState({
            isLoading: true
        })
        console.log('submitting case number...')
        let caseNumber = this.caseNumber.value
        auth.fetch(`${auth.domain}/client-portal/${caseNumber}`,{method: 'GET'})
            .then(res => {
                this.setState({
                    isLoading: false,
                    case: res.case
                })
            })
    }

    render(){
        return(
            <Layout>
                <div>
                    This is where you find your case
                </div>
                <Row>
                    <Col xs="8" sm="8" md="8" lg="8" xl="8">
                        <Form>
                            <FormGroup>
                                <Label for="findCaseInput">Find Your Case</Label>
                                <Input type="text" id="findCaseInput" placeholder="Enter Your Case Number Here" getRef={input=>this.caseNumber=input}/>
                            </FormGroup>
                            <Button onClick={this.findCase}>Submit</Button>
                        </Form>
                        <div id="case-window-container">
                            {
                                this.state.case ? (
                                    <div>
                                        <div id="defendant-info-container">
                                            <h2>Defendant</h2>
                                            <p>{this.state.case.defendantName}</p>
                                            <p>Case No. {this.state.case.caseNumber}</p>
                                            <p>{this.state.case.defendantPhone}</p>
                                            <p>Total Bail Amount ${this.state.case.totalBailAmount}</p>
                                            <p>Bail Outstanding ${this.state.case.totalBailOutstanding}</p>
                                            <p>Bail Due Date {this.state.case.BailPaymentDueDate}</p>
                                        </div>
                                        <div id="cosigner-info-container">
                                            <h2>Cosigner</h2>
                                            <p>{this.state.case.cosignerName}</p>
                                            <p>{this.state.case.cosignerPhone}</p>
                                        </div>
                                        <div id="court-dates-container">
                                            <h2>Court Dates</h2>
                                            {this.state.case.courtDatesList.map(item => (
                                            <div class="court-dates-list">
                                                <p>Date {item.date}</p>
                                                <p>Time {item.time}</p>
                                                <p>Description {item.description}</p>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                    ) : this.state.isLoading ? (
                                            <ReactLoading type={"cylon"} color={"cornflowerblue"} height="667" width="375"/>
                                        ) : (
                                            <div>
                                                <h1>Find Your Case</h1>
                                            </div>
                                        )
                            } 
                        </div>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default FindYourCase;
