import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout.js';
import contactUsStyles from '../styles/contactUsStyles.js';
import quoteFormStyles from '../styles/quoteFormStyles.js';
import {Container, Row, Col} from 'reactstrap';
import  QuoteForm from '../components/QuoteForm.js';
import GoogleMapsComponent from '../components/GoogleMapsComponent.js';
import {GOOGLE_KEY} from '../config';

class ContactUs extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout>
                <div className="contact-us-splash">
                    <div className="contact-us-splash-info">
                        <h1>CONTACT US</h1>
                        <p>Please contact us for all of your bail needs</p>  
                        <p>We are eager to answer and assist you in the best way possible</p>
                    </div>
                </div>
                <div className="contact-us-container">
                    <div className="contact-info">
                        <Row>
                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                <div className="contact-column">
                                    <img src="/static/icons/phone-icon.png"/>
                                    <a href="tel:1-808-585-1626"><p>PHONE 1: (808) 585-1626</p></a>
                                    <a href="tel:1-808-947-3977"><p>PHONE 2: (808) 947-3977</p></a>
                                    <a href="tel:1-808-854-7151"><p>24 HR: (808) 854-7151</p></a>
                                </div>
                            </Col>
                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                <div className="contact-column">
                                    <img src="/static/icons/location-icon.png"/>
                                    <p>1154 FORT ST MALL STE 204</p>
                                    <p>HONOLULU, HI 96813</p>
                                    <p>MON-FRI: 8:30 AM to 5:00 PM</p>
                                    <p>SAT-SUN: 24HR</p>
                                </div>
                            </Col>
                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                <div className="contact-column">
                                    <img src="/static/icons/mail-icon.png"/>
                                    <a href="mailto:artofbailhawaii@gmail.com"><p>ARTOFBAILHAWAII@GMAIL.COM</p></a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="quote-map-row">
                        <Row>
                            <Col xs="12" sm="12" md="6" lg="4" xl="4">
                                <QuoteForm />
                            </Col>
                            <Col xs="12" sm="12" md="6" lg="8" xl="8">
                                <GoogleMapsComponent
                                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_KEY}&v=3.exp&libraries=geometry,drawing,places`}
                                    isMarkerShown
                                    loadingElement={<div style={{height: '100%'}}/>}
                                    containerElement={<div style={{height: '100%'}}/>}
                                    mapElement={<div style={{height:'100%'}}/>}
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
                <style jsx>{contactUsStyles}</style>
            </Layout>
        )
    }
}

export default ContactUs;
