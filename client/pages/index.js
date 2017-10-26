import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {Container, Row, Col, Form, FormGroup, Label, Input, FormText, Button} from 'reactstrap';
import Layout from '../components/Layout.js';

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
                <div>Home Page</div>
                <Row>
                    <Col xs="12" sm="12" md="8" lg="8" xl="8">
                        <div id="home-info-container">
                            This will be the information about arthur, getting a quote, etc
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="4" lg="4" xl="4">

                        <Form id="request-form-container">
                            <FormGroup>
                                <Label for="clientName">Your Name</Label>
                                <Input type="text" id="clienttName" placeholder="Enter Your Name"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="clientEmail">Your Email</Label>
                                <Input type="email" id="clientEmail" placeholder="Enter Your Email"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="clientPhone">Phone Number</Label>
                                <Input type="tel" id="clientPhone" placeholder="(xxx)xxx-xxxx"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="defendantName">Defendant's Name</Label>
                                <Input type="text" id="defendantName" placeholder="Enter Defendant's Name"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="clientMessage">Message</Label>
                                <Input type="textarea" id="clientMessage" placeholder="Message..."/>
                            </FormGroup>
                            <Button onClick={this.handleSubmit}>Send</Button>
                        </Form>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default Index;
