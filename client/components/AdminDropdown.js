import React, {Component} from 'react';
import Link from 'next/link';
import {Dropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap';
import AuthService from '../utils/AuthService.js';
import Router from 'next/router';
import dropdownStyles from '../styles/dropdownStyles.js';

const API_URL = process.env.API_URL;
const auth = new AuthService(API_URL);


export default class AdminDropdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            dropdownOpen: false
        }
        this.toggle = this.toggle.bind(this);
        this.logout = this.logout.bind(this);
    }

    toggle(){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    logout(){
        auth.logout();
        Router.replace('/admin-login');
    }

    render(){
        console.log('props', this.props)
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>Admin</DropdownToggle>
                    <DropdownMenu>
                        <Link href="/admin-dashboard"><DropdownItem>Dashboard</DropdownItem></Link>
                        <DropdownItem className="sign-out-dropdown" onClick={this.logout}>Sign Out</DropdownItem>
                    </DropdownMenu>
                    <style jsx global>{dropdownStyles}</style>
            </Dropdown>
        )
    }
}
