import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import {Form, FormGroup, FormText, Label, Input, Container, Row, Col, Button} from 'reactstrap';

class FindYourCase extends Component {
    constructor(props){
        super(props); 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        console.log('submitting case number...')
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
                                <Input type="text" id="findCaseInput" placeholder="Enter Your Case Number Here"/>
                            </FormGroup>
                            <Button onClick={this.handleSubmit}>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default FindYourCase;
