import React, {Component} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';

export default class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
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
                    <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/static/css/styles.css"/>   
                </Head>
                <Navbar color="faded" full="true" light toggleable>
                  <NavbarToggler right onClick={this.toggleNav} />
                  <NavbarBrand href="/">Art of Bail Hawaii</NavbarBrand>
                  <Collapse isOpen={this.state.isOpen} className="navbar-toggle" padding-right="1rem" navbar>
                    <Nav className="ml-auto" navbar>
                      <NavItem> 
                          <Link href="/"><a className="nav-link">Home</a></Link>
                      </NavItem>
                      <NavItem>
                              <Link href="/info"><a className="nav-link">Info</a></Link>
                      </NavItem>
                      <NavItem>
                              <Link href="/locations"><a className="nav-link">Locations</a></Link>
                      </NavItem>
                      <NavItem>
                          <Link href="/contact"><a className="nav-link">Contact Us</a></Link>
                      </NavItem>
                    </Nav>
                  </Collapse>
                </Navbar>
                <Container style={{
                    margin: 0,
                    padding: 0,
                    width: "100%",
                }}>
                    {this.props.children}
                </Container> 
            </div>
        )
    }
}

