import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, FormText, Button} from 'reactstrap';

let API_URL = process.env.API_URI;

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
            
        )
    }
}

export default QuoteForm;
