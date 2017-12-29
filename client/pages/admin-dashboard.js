import React, {Component} from 'react';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import AddCaseModal from '../components/AddCaseModal.js';
import DeleteCaseModal from '../components/DeleteCaseModal.js';
import fetch from 'isomorphic-unfetch';
import {Breadcrumb, BreadcrumbItem, Form, FormGroup, FormText, Button, Label, Input, Col, Row, Container} from 'reactstrap';
import withAuth from '../utils/withAuth.js';
import EditCaseModal from '../components/EditCaseModal.js';
import dashboardStyles from '../styles/dashboardStyles.js';

class AdminDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            currentSelected: true,
            closedSelected: false
        }
        this.deleteCase = this.deleteCase.bind(this);
        this.addCase = this.addCase.bind(this);
        this.editCase = this.editCase.bind(this);
        this.renderCurrent = this.renderCurrent.bind(this);
        this.renderClosed = this.renderClosed.bind(this);
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

    editCase(editedItem){
        this.setState({
            items: this.state.items.map(item => {
                if(item._id === editedItem._id){
                    item = editedItem;
                    return item;
                } else {
                    return item;
                }
            })
        })
    }

    renderCurrent(){
        //API call to db to fill state with current clients
        this.setState({
            currentSelected: true,
            closedSelected: false
        })
    }

    renderClosed(){
        //API call to db to fill state with closed clients
        this.setState({
            currentSelected: false,
            closedSelected: true
        })
    }

    render(){
        const currentActive = this.state.currentSelected ? "is-active" : "not-active";
        const closedActive = this.state.closedSelected ? "is-active" : "not-active";
        return(
            <div className="dashboard-container">
                <div className="table-container">
                    <div className="client-header">
                        <h1>Clients</h1>
                        <AddCaseModal {...this.props} addCase={this.addCase}/>
                    </div>
                        <Breadcrumb tag="nav">
                            <BreadcrumbItem className={currentActive} onClick={this.renderCurrent}>Current</BreadcrumbItem> 
                            <BreadcrumbItem className={closedActive} onClick={this.renderClosed}>Closed</BreadcrumbItem>
                        </Breadcrumb>
                            <table className="client-table">
                                <th>Name</th>
                                <th>Case Number</th>
                                <th>Bail Amount</th>
                                <th>Due Date</th>
                                <th></th>
                                {this.state.currentSelected ? this.state.items.map(item => (
                                <tr>
                                    <Link prefetch href={`/client?id=${item._id}`}><td className="client-name">{item.defendantName}</td></Link>
                                    <td>{item.caseNumber}</td>
                                    <td>${item.totalBailAmount}</td>
                                    <td>{item.BailPaymentDueDate}</td>
                                    <td><DeleteCaseModal {...this.props} item={item} deleteCase={this.deleteCase}/></td>
                                </tr>
                                )) : (
                                <tr>
                                    <td>Closed Client Name</td>
                                    <td>Closed Client Case Number</td>
                                    <td>Closed Client Bail Amount</td>
                                    <td>Closed Client Bail Due Date</td>
                                </tr>
                                )
                                }
                            </table>
                        </div>
            <style jsx global>{dashboardStyles}</style>
            </div>
        )
    }
}

export default withAuth(AdminDashboard);
