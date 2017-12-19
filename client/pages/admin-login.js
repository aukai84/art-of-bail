import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout.js';
import loginStyles from '../styles/loginStyles';
import {Container, Row, Col, Form, FormGroup, FormText, Label, Input, Button} from 'reactstrap';
import AuthService from '../utils/AuthService.js';
console.log(loginStyles)

const API_URL = process.env.API_URL;
const auth = new AuthService(API_URL);

class AdminLogin extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount(){
        if(auth.loggedIn()){
            this.props.url.replace('/admin-dashboard');
        } 
    }

    handleSubmit(e){
        e.preventDefault();
        console.log('username', this.username.value)
        auth.login(this.username.value, this.password.value)
            .then(res => {
                this.props.url.replace('/admin-dashboard');
            })
            .catch(e => {
               console.log("this is the error message..") 
            })
    }

    render(){
        return(
            <Layout>
                <div id="login-page-container">
                    <h1>This is the admin login page</h1>
                    <Row>
                        <Col xs="12" sm="12" md="4" lg="4" xl="4">
                            <Form id="login-form">
                                <FormGroup>
                                    <Input type="text" placeholder="Username" getRef={input=>(this.username = input)}/>
                                </FormGroup>
                                <FormGroup>
                                    <Input type="password" placeholder="Password" getRef={input=>(this.password= input)}/>
                                </FormGroup>
                                <Button className="loginButton" color="primary" onClick={this.handleSubmit}>Log in</Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
                <style jsx>{loginStyles}</style>
            </Layout>
        )
    }
}

export default AdminLogin;
