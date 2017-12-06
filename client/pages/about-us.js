import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {Container, Row, Col} from 'reactstrap';
import Layout from '../components/Layout.js';

class AboutUs extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Layout>
                <div>
                    <p>Art of Bail, we'll bail you out</p>
                    This is the About us page
                </div>
            </Layout>
        )
    }
}

export default AboutUs;

