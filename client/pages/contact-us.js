import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout.js';
import {Container, Row, Col} from 'reactstrap';

class ContactUs extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Layout>
                <div>
                    This is the contact us page
                </div>
            </Layout>
        )
    }
}

export default ContactUs;
