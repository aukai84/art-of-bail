import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {Container, Row, Col, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, FormText, Button} from 'reactstrap';
import Layout from '../components/Layout.js';
import QuoteForm from '../components/QuoteForm.js';
import homePageStyles from '../styles/homePageStyles.js';

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        console.log('requesting bail from arthur...')
    }

    
    render(){
        return (
            <Layout>
                <div className="home-page-container">
                <div id="splash-container">
                    <div id="splash-info-container">
                        <div id="splash-info">
                            <h1>Art of Bail</h1>
                            <p>Hawaii's Premiere Bail Bonds Company</p>
                            <Link href="/contact-us"><Button className="contact-us-button">Contact Us</Button></Link>
                        </div>
                    </div>
                </div>
                <div className="home-page-body">
                    <div className="home-info-container">
                    <Row>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                <img className="court-icon" src="/static/icons/court-icon.png"/>
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                <h6>We at Art of Bail Hawaii strive to offer the you the best experience.  Call us at <a href="tel:1-808-585-1626">(808) 585-1626</a>, or fill out our <Link prefetch href="/contact-us"><a>contact</a></Link> form below  and our team of professional staff members will be eager to assist you</h6>
                        </Col>
                    </Row>
                </div>
                    <Row>
                        <Col xs="12" sm="12" md="4" lg="4" xl="4">
                            <div className="home-column-containers">First Column info</div>
                        </Col>
                        <Col xs="12" sm="12" md="4" lg="4" xl="4">
                            <div className="home-column-containers">Second Column info</div>
                        </Col>
                        <Col xs="12" sm="12" md="4" lg="4" xl="4">
                            <div className="home-column-containers">Third Column info</div>
                        </Col>
                    </Row>
                    <Row id="quote-row">
                        <Col xs="12" sm="12" md="6" lg="5" xl="4">
                            <QuoteForm />
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="7" xl="8">
                            <h2>Info Statement about arthurs website</h2>
                        </Col>
                    </Row>
                </div>
                <style jsx global>{homePageStyles}</style>
            </div>
            </Layout>
        )
    }
}

export default Index;
