import React, {Component} from 'react';
import AuthService from './AuthService.js';
import ReactLoading from 'react-loading';
const API_URL = process.env.API_URL;

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
                <div>
                    {this.state.isLoading? (<ReactLoading type="cylon" color="cornflowerblue" height="667" width="667" delay={2000}/>) : (
                    <AuthComponent {...this.props} auth={Auth} />
                    )}
                </div>
            )
        }
    }
}
