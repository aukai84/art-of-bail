import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {Container, Row, Col} from 'reactstrap';
import Layout from '../components/Layout.js';
class Index extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Layout>
                <div>Home Page</div>
            </Layout>
        )
    }
}

export default Index;
