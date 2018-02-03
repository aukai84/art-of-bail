import React, {Component} from 'react';
import AuthService from './AuthService.js';
import Layout from '../components/Layout.js';
import {API_URL} from '../config';

export default function withAuth(AuthComponent) {
    const Auth = new AuthService(API_URL);
    return class Authenticated extends Component {
        constructor(props){
            super(props);
            this.state = {
                isLoading: true
            };
        }

        componentDidMount(){
            //check if admin is logged in
            if(Auth.loggedIn()){
                this.setState({isLoading: false})
            } else {
                //route back to home if not logged in
                this.props.url.replace('/')
            }
        } 
        
        render(){
            return (
                <Layout>
                        {this.state.isLoading? (<div className="load-screen">loading...</div>) : (
                        <AuthComponent {...this.props} auth={Auth} />
                        )}
                    <style jsx>{`
                        .load-screen {
                        background-color: #1a2930;
                        min-height: 100vh;
                        }     
                    `}</style>
                </Layout>
            )
        }
    }
}
