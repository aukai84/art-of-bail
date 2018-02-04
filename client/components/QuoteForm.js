import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, FormText, Button} from 'reactstrap';
import quoteFormStyles from '../styles/quoteFormStyles.js';
import {API_URL} from '../config';

class QuoteForm extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        console.log('submitting quote to arthur...');
    }

    render(){
        return(
            <Form id="quote-form-panel">
                <FormGroup>
                    <Label for="clientName">Cosigner Full Name<span className="required">*</span></Label>
                    <InputGroup>
                        <Input bsSize="md" type="text" id="clientName" placeholder="Name"/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="clientEmail">Cosigner Email<span className="required">*</span></Label>
                    <InputGroup>
                        <Input type="email" id="clientEmail" placeholder="Email"/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="clientPhone">Cosigner Phone Number<span className="required">*</span></Label>
                    <InputGroup>
                        <Input type="tel" id="clientPhone" placeholder="Phone Number"/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="defendantName">Defendant's Full Name<span className="required">*</span></Label>
                    <InputGroup>
                        <Input type="text" id="defendantName" placeholder="Defendant's Name"/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="clientMessage">Message</Label>
                    <Input type="textarea" id="clientMessage" placeholder="Message..."/>
                </FormGroup>
                <Button className="quote-form-button" onClick={this.handleSubmit} block>Contact Us</Button>
                <style jsx global>{quoteFormStyles}</style>
            </Form>
        )
    }
}

export default QuoteForm;
