import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout.js';
import contactUsStyles from '../styles/contactUsStyles.js';
import quoteFormStyles from '../styles/quoteFormStyles.js';
import {Container, Row, Col} from 'reactstrap';
import  QuoteForm from '../components/QuoteForm.js';
import GoogleMapsComponent from '../components/GoogleMapsComponent.js';
 
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
                                <h2>Call</h2>
                                <p>Phone 1: (808) 585-1626</p>
                                <p>Phone 2: (808) 947-3977</p>
                                <p>Alt: (808) 589-1194</p>
                                <p>24 Hr: (808) 854-7151</p>
                            </Col>
                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                <h2>Mail</h2>
                                <p>1154 Fort St. Mall Suite 204</p>
                                <p>Honolulu, HI 96813</p>
                            </Col>
                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                <h2>Email</h2>
                                <p>artofbailhawaii@gmail.com</p>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col xs="12" sm="12" md="6" lg="4" xl="4">
                            <QuoteForm />
                        </Col>
                        <Col xs="12" sm="12" md="6" lg="8" xl="8">
                            <GoogleMapsComponent
                                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                isMarkerShown
                                loadingElement={<div style={{height: '100%'}}/>}
                                containerElement={<div style={{height: '100%'}}/>}
                                mapElement={<div style={{height:'100%'}}/>}
                            />
                        </Col>
                    </Row>
                </div>
                <style jsx>{contactUsStyles}</style>
            </Layout>
        )
    }
}

export default ContactUs;
