import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout.js';
import {Container, Row, Col, Form, FormGroup, FormText, Label, Input, Button} from 'reactstrap';

class AdminLogin extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Layout>
                <div>This is the admin login page</div>
                <Form>
                    <FormGroup>
                        <Input type="text" placeholder="Username"/>
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" placeholder="Password"/>
                    </FormGroup>
                    <Button color="primary" onClick={this.handleSubmit}>Log in</Button>
                </Form>
            </Layout>
        )
    }
}

export default AdminLogin;
