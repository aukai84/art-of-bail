import React, {Component} from 'react';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import fetch from 'isomorphic-unfetch';

class Client extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Layout>
                <div>client page</div>
            </Layout>
        )
    }
    }

export default Client;
