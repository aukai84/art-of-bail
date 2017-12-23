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
        this.state = {
            username: '',
            password: '',
            loginError: false
        }
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        if(auth.loggedIn()){
            this.props.url.replace('/admin-dashboard');
        } 
    }

    handleUserChange(e){
        e.preventDefault();
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordChange(e){
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        auth.login(this.state.username, this.state.password)
            .then(res => {
                this.props.url.replace('/admin-dashboard');
            })
            .catch(e => {
                console.log("this is the error message..") 
                this.setState({
                    loginError: true
                })
            })
    }

    render(){
        return(
            <Layout>
                <div id="login-page-container">
                    <div id="login-panel">
                        <h3 id="login-panel-header">Login as admin</h3>
                        <Form id="login-form">
                            <FormGroup>
                                <Input className="login-input" type="text" placeholder="Username" onChange={this.handleUserChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Input className="login-input" type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                            </FormGroup>
                            <Button className="loginButton" onClick={this.handleSubmit}>Log In</Button>
                            {this.state.loginError ? (<div className="login-error-message">Invalid username/password</div>) : (<div></div>)}
                        </Form>
                        <Link href="/">
                            <div className="login-page-route-home">Not an admin? <span className="click-here">Click here</span></div>
                        </Link>                            
                    </div>
                </div>
                <style jsx global>{loginStyles}</style>
            </Layout>
        )
    }
}

export default AdminLogin;
