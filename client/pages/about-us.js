import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import {Container, Row, Col} from 'reactstrap';
import Layout from '../components/Layout.js';
import aboutUsStyles from '../styles/aboutUsStyles.js';

class AboutUs extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Layout>
                <div className="about-us-splash">
                    <div className="about-us-splash-info">
                        <h1>OUR MISSION</h1>
                        <p>To provide fast, efficient, and knowledgeable service to our clients</p>
                    </div>
                </div>
                <div className="about-us-container">
                    <div className="about-text-container">
                        <h1>About</h1>
                        <p>Art of Bail Hawaii Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo eget tortor quis aliquam. Phasellus lacus turpis, ornare ut luctus vitae, mollis quis ante. Donec sit amet nibh ac orci interdum tincidunt sed in felis. Etiam ultrices ante vel dui gravida, at congue erat sollicitudin. Phasellus id dictum diam. Praesent ultrices turpis mauris, et porttitor lectus cursus quis. Phasellus quis leo sed nibh scelerisque euismod at eu risus. Etiam facilisis varius felis et tincidunt. Praesent id neque risus. Phasellus ac lorem efficitur, laoreet elit quis, feugiat libero. Aenean tellus ligula, venenatis ut purus et, tincidunt malesuada arcu.</p>
                    </div>
                    <div className="about-us-columns">
                        <Row>
                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                <h2>Commitment</h2>
                            </Col>
                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                <h2>Values</h2>
                            </Col>
                            <Col xs="12" sm="12" md="4" lg="4" xl="4">
                                <h2>Knowledge</h2>
                            </Col>
                        </Row>
                    </div>
                </div>
                <style jsx>{aboutUsStyles}</style>
            </Layout>
        )
    }
}

export default AboutUs;

