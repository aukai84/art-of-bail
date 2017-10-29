import React, {Component} from 'react';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import AddCaseModal from '../components/AddCaseModal.js';
import fetch from 'isomorphic-unfetch';
import {Card, CardImg, CardText, CardBody, Form, FormGroup, FormText, Button, Label, Input, Col, Row, Container} from 'reactstrap';
import withAuth from '../utils/withAuth.js';
import EditCaseModal from '../components/EditCaseModal.js';

class AdminDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
        this.logout= this.logout.bind(this)
    }

    componentDidMount(){
        this.props.auth.fetch(`${this.props.auth.domain}/admin/edit-cases`, {
            method: 'GET'
        })
            .then(res => {
                this.setState({
                    items: res
                })
            })
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
                {this.state.items.map(item => (
                    <EditCaseModal {...this.props} item={item}/>
                ))}
            </Layout>
        )
    }
}

export default withAuth(AdminDashboard);
