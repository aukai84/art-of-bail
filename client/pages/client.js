import React, {Component} from 'react';
import Link from 'next/link';
import Layout from '../components/Layout.js';
import clientPageStyles from '../styles/clientPageStyles.js';
import dashboardStyles from '../styles/dashboardStyles.js';
import EditCaseModal from '../components/EditCaseModal.js';
import withAuth from '../utils/withAuth.js';


class ClientPage extends Component {
        constructor(props){
        super(props)
        this.state = {
            item: {}
        }
    }

    componentDidMount(){
        this.props.auth.fetch(`${this.props.auth.domain}/admin/edit-cases/${this.props.url.query.id}`, {
            method: 'GET'
        })
            .then(item => {
                this.setState({
                    item
                })
            })
    }

    render(){
        console.log(this.state, 'item')
        return(
            <div className="dashboard-container">
                <div className="table-container">
                    <div className="client-header">
                        <h1>{this.state.item.defendantName}</h1>
                        <EditCaseModal {...this.props} item={this.state.item}/>
                    </div>
                    <h4>{this.state.item.caseNumber}</h4>
                    <a href={this.state.item.stateCaseLink}>hawaii.gov</a>
                    <div className="client-details-container">
                        <div className="client-details-list">
                            <ul>
                                <li>Phone</li>
                                <li>Cosigner</li>
                                <li>Cosigner Phone</li>
                            </ul>
                            <ul>
                                <li>{this.state.item.defendantPhone}</li>
                                <li>{this.state.item.cosignerName}</li>
                                <li>{this.state.item.cosignerPhone}</li>
                            </ul>
                        </div>
                        <div className="client-details-list">
                            <ul>
                                <li>Bail Amount</li>
                                <li>Bail Outstanding</li>
                                <li>Bail Due</li>
                            </ul>
                            <ul>
                                <li>${this.state.item.totalBailAmount}</li>
                                <li>${this.state.item.totalBailOutstanding}</li>
                                <li>{this.state.item.BailPaymentDueDate}</li>
                            </ul>
                        </div>
                            {this.state.item.courtDatesList ? this.state.item.courtDatesList.map(item => (
                            <div className="client-details-list">
                            <ul>
                                <li>Court Date</li>
                            </ul>
                            <ul>
                                <li>{item.desc}</li>
                            </ul>
                        </div>
                        )) : (<p>Court dates pending</p>)}
                    </div>
                </div>
                <style jsx global>{dashboardStyles}</style>
                <style jsx global>{clientPageStyles}</style>
            </div>
        )
    }
}

export default withAuth(ClientPage);
