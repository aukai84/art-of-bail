import React, {Component} from 'react';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';
import {Form, FormGroup, FormText, Button, Label, Input, Col, Row, Container} from 'reactstrap';

class AdminDashboard extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Layout>
                <div>This is the admin dashboard</div>
            </Layout>
        )
    }
}

export default AdminDashboard;
