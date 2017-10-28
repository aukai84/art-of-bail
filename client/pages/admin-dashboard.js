import React, {Component} from 'react';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import AddCaseModal from '../components/AddCaseModal.js';
import fetch from 'isomorphic-unfetch';
import {Form, FormGroup, FormText, Button, Label, Input, Col, Row, Container} from 'reactstrap';
import withAuth from '../utils/withAuth.js';

class AdminDashboard extends Component {
    constructor(props){
        super(props);
        this.logout= this.logout.bind(this)
    }

    logout(){
        this.props.auth.logout();
        this.props.url.replace('/admin-login')
    }

    render(){
        return(
            <Layout>
                <div>This is the admin dashboard</div>
                <AddCaseModal/>
                <Button color="secondary" size="sm" onClick={this.logout}>Sign Out</Button>
            </Layout>
        )
    }
}

export default withAuth(AdminDashboard);
