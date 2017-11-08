import React, {Component} from 'react';
import {Row, Col, Card, CardTitle, CardSubtitle,  CardImg, CardText, CardBody, Form, FormGroup, FormText, Button, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class EditCaseModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
        this.deleteCase = this.deleteCase.bind(this);
    }

    toggle(){
        this.setState({
            modal: !this.state.modal 
        })
    }

    deleteCase(){
        this.props.deleteCase(this.props.item);
    }

    render(){
        return(
            <div>
                <Card>
                    <CardTitle>{this.props.item.defendantName}</CardTitle>
                    <CardSubtitle>Case no. {this.props.item.caseNumber}</CardSubtitle>
                    <CardText>Bail Amount: ${this.props.item.totalBailAmount}</CardText>
                    <CardText>Bail Outstanding: ${this.props.item.totalBailOutstanding}</CardText>
                    <CardText>Bail Due Date: {this.props.item.BailPaymentDueDate}</CardText>
                    <CardText>Defendant Phone: {this.props.item.defendantPhone}</CardText>
                    <CardText>Cosigner : {this.props.item.cosignerName}</CardText>
                    <CardText>Cosigner Phone: {this.props.item.cosignerPhone}</CardText>
                    <CardText><a href={this.props.item.stateCaseLink}>Ekokua</a></CardText>
                        <Button color="primary" onClick={this.toggle}>Edit Case</Button>
                        <Button color="danger" onClick={this.deleteCase}>Delete Case</Button>
                </Card>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody>
                        <div>
                            {this.props.item.stateCaseLink}
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default EditCaseModal;
