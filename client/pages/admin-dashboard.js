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
        this.logout = this.logout.bind(this);
        this.deleteCase = this.deleteCase.bind(this);
        this.addCase = this.addCase.bind(this);
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

    addCase(newItem){
        this.setState({
            items: this.state.items.concat(newItem)
        })
    }

    deleteCase(id){
        this.setState({
            items: this.state.items.filter(item => {
                return item._id != id 
            })
        }) 
    }

    render(){
        return(
            <Layout>
                <div>This is the admin dashboard</div>
                <AddCaseModal {...this.props} addCase={this.addCase}/>
                <Button color="secondary" size="sm" onClick={this.logout}>Sign Out</Button>
                <Row>
                    {this.state.items.map(item => (
                        <Col className="edit-modal-container" xs="12" sm="6" md="6" lg="4" xl="4">
                            <EditCaseModal {...this.props} deleteCase={this.deleteCase} item={item}/>
                        </Col>
                    ))}
                </Row>
            </Layout>
        )
    }
}

export default withAuth(AdminDashboard);
