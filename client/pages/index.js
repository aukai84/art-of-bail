import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {Container, Row, Col, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, FormText, Button} from 'reactstrap';
import Layout from '../components/Layout.js';
import QuoteForm from '../components/QuoteForm.js';
import CarouselComponent from '../components/Carousel.js';

let API_URL = process.env.API_URI;
console.log('this is the api...', API_URL)

class Index extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        console.log('requesting bail from arthur...')
    }

    render(){
        return (
            <Layout>
                <div id="splash-container">
                    <div id="splash-info">
                        <h3>Welcome to Art of Bail Hawaii</h3>
                    </div>
                </div>
                    <Row>
                        <Col xs="12" sm="12" md="12" lg="12" xl="12">
                            <div id="home-info-container">
                                This will be the information about arthur, getting a quote, mission statement?, etc
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="12" sm="12" md="8" lg="8" xl="8">
                            <h2>Info Statement about arthurs website</h2>
                        </Col>
                        <Col xs="12" sm="12" md="4" lg="4" xl="4">
                            <QuoteForm />
                        </Col>
                    </Row>
            </Layout>
        )
    }
}

export default Index;
