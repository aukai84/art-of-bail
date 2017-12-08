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

        return (
            <div>
                <Head>
                    <title>Art's BBC</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" media="all" type="text/css" href="/static/css/bootstrap.min.css"/>
                    <link rel="stylesheet" media="all" type="text/css"  href="/static/font-awesome-4.7.0/css/font-awesome.min.css"/>
                    <link rel="stylesheet" href="/static/css/styles.css"/>  
                </Head>
                <div>
                    <Navbar className="navbar-dark" style={{backgroundColor: '#25274D'}}  expand="md">
                      <NavbarBrand href="/">Art of Bail Hawaii</NavbarBrand>
                      <NavbarToggler right onClick={this.toggleNav} className="mr-2"/>
                      <Collapse isOpen={this.state.isOpen} padding-right="1rem" navbar>
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
                          <NavItem>
                              {
                                auth.loggedIn()?(<Link href="/admin-dashboard"><a className="nav-link">Admin</a></Link>) : (<Link href="/admin-login"><a className="nav-link">Login</a></Link>)
                              }
                          </NavItem>
                        </Nav>
                      </Collapse>
                    </Navbar>
                </div>
                        {this.props.children}
            </div>
        )
    }
}
