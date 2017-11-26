import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {Container, Row, Col, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, FormText, Button} from 'reactstrap';
import Layout from '../components/Layout.js';
let API_URL = process.env.API_URI;
console.log('this is the api...', API_URL)

class Index extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        console.log('requesting bail from arthur...')
    }

    render(){
        return (
            <Layout>
                <div id="splash-container">
                    <div id="splash-info">
                        <h3>Welcome to Art of Bail Hawaii</h3>
                    </div>
                </div>
                <Row>
                    <Col xs="12" sm="12" md="8" lg="8" xl="8">
                        <div id="home-info-container">
                            This will be the information about arthur, getting a quote, etc
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="4" lg="4" xl="4">
                        <Form id="request-form-container">
                            <FormGroup>
                                <Label for="clientName">Your Name<span className="required">*</span></Label>
                                <InputGroup>
                                    <InputGroupAddon><i className="fa fa-user-circle"></i></InputGroupAddon>
                                    <Input type="text" id="clientName" placeholder="Enter Your Name"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="clientEmail">Your Email<span className="required">*</span></Label>
                                <InputGroup>
                                    <InputGroupAddon><i className="fa fa-envelope"></i></InputGroupAddon>
                                    <Input type="email" id="clientEmail" placeholder="Enter Your Email"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="clientPhone">Phone Number<span className="required">*</span></Label>
                                <InputGroup>
                                    <InputGroupAddon><i className="fa fa-phone-square fa-lg"></i></InputGroupAddon>
                                    <Input type="tel" id="clientPhone" placeholder="(xxx)xxx-xxxx"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="defendantName">Defendant's Name<span className="required">*</span></Label>
                                <InputGroup>
                                    <InputGroupAddon><i className="fa fa-user-circle"></i></InputGroupAddon>
                                    <Input type="text" id="defendantName" placeholder="Enter Defendant's Name"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label for="clientMessage">Message</Label>
                                <Input type="textarea" id="clientMessage" placeholder="Message..."/>
                            </FormGroup>
                            <Button color="primary" onClick={this.handleSubmit} block>CONTACT US</Button>
                        </Form>
                    </Col>
                    </Row>

            </Layout>
        )
    }
}

export default Index;
