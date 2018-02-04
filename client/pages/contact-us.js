import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout.js';
import contactUsStyles from '../styles/contactUsStyles.js';
import {Container, Row, Col} from 'reactstrap';

class ContactUs extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout>
                <div className="contact-us-splash">
                    <h1>CONTACT US</h1>
                    <p>Please contact us for all of your bail needs</p>  
                    <p>We are eager to answer and assist you in the best way possible</p>
                </div>
                <div className="contact-us-container">
                    This is the contact us page
                </div>
                <style jsx>{contactUsStyles}</style>
            </Layout>
        )
    }
}

export default ContactUs;
