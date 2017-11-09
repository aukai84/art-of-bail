import React, {Component} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import AuthService from '../utils/AuthService.js';
const API_URL = process.env.API_URL;
const auth = new AuthService(API_URL); 
export default class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            isLoggedIn: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){

        console.log('this is auth logged in?..', auth.loggedIn())
        return (
            <div>
                <Head>
                    <title>Art's BBC</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/static/css/styles.css"/>  
                    <link rel="stylesheet" media="all" type="text/css"  href="/static/font-awesome-4.7.0/css/font-awesome.min.css"/>
                </Head>
                <div id="main-header">
                    <h1>Art of Bail Hawaii</h1>
                </div>{
                auth.loggedIn()?(<Link href="/admin-dashboard">King Arthur's Dashboard</Link> ) : 
                (<Link href="/admin-login">Login</Link>)
                }
                <Navbar color="faded" full="true" light toggleable>
                  <NavbarToggler right onClick={this.toggleNav} />
                  <NavbarBrand href="/">Logo</NavbarBrand>
                  <Collapse isOpen={this.state.isOpen} className="navbar-toggle" padding-right="1rem" navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem> 
                          <Link href="/"><a className="nav-link">Home</a></Link>
                      </NavItem>
                      <NavItem>
                              <Link href="/about-us"><a className="nav-link">About Us</a></Link>
                      </NavItem>
                      <NavItem>
                              <Link href="/find-your-case"><a className="nav-link">Find Your Case</a></Link>
                      </NavItem>
                      <NavItem>
                          <Link href="/contact-us"><a className="nav-link">Contact Us</a></Link>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
                <Container>
                    {this.props.children}
                </Container> 
            </div>
        )
    }
}

