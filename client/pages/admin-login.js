import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout.js';
import {Container, Row, Col, Form, FormGroup, FormText, Label, Input, Button} from 'reactstrap';
import AuthService from '../utils/AuthService.js';

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
                <div>This is the admin login page</div>
                <Form id="loginForm">
                    <FormGroup>
                        <Input type="text" placeholder="Username" getRef={input=>(this.username = input)}/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" placeholder="Password" getRef={input=>(this.password= input)}/>
                    </FormGroup>
                    <Button className="loginButton" color="primary" onClick={this.handleSubmit}>Log in</Button>
                </Form>
            </Layout>
        )
    }
}

export default AdminLogin;
