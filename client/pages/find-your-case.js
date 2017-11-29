import React, {Component} from 'react';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import {Form, FormGroup, FormText, Label, Input, Container, Row, Col, Button} from 'reactstrap';
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
                console.log(res)
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
                        {
                        this.state.case ? (<div>Case is found!</div>) : this.state.isLoading ? (<div>Loading...</div>) : (<div>Please search for case..</div>)
                        }
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default FindYourCase;
