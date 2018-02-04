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
                                <h6>We at Art of Bail Hawaii strive to offer the you the best experience.  Our company specializes in a multitude of bail services, including our online platform to acces your bail information.  If you are already a client click <Link prefetch href="/find-your-case"><a>here</a></Link></h6>
                            </Col>
                        </Row>
                    </div>
                    <div className="home-info-container">
                        <Row className="support-row">
                            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                <h6>We also offer around the clock <span>24 hour</span> service.  You can call this <a href="tel:1-808-854-7151">number</a>, or fill out our <Link prefetch href="/contact-us"><a>contact</a></Link> form below  and our team of professional staff members will be eager to assist you</h6>
                            </Col>
                            <Col xs="12" sm="12" md="6" lg="6" xl="6">
                                <img className="support-icon" src="/static/icons/support-icon.png"/>
                            </Col>
                        </Row>
                    </div>
                    <Row id="quote-row">
                        <Col xs="12" sm="12" md="6" lg="5" xl="4">
                            <QuoteForm />
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="7" xl="8">
                                <h6>Please fill out our form with questions regarding quoting, services, and consultation.  One of our staff members will respond to you in a timely manner.  If you are already a member you can look up your case information <Link prefetch href="/find-your-case"><a>here</a></Link></h6>
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
