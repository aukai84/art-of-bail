import React, {Component} from 'react';
import {Card, CardTitle, CardSubtitle,  CardImg, CardText, CardBody, Form, FormGroup, FormText, Button, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class EditCaseModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle(){
        this.setState({
            modal: !this.state.modal 
        })
    }

    render(){
        return(
            <div onclick={this.toggle}>
                <Card onClick={this.toggle}>
                    <CardTitle>{this.props.item.defendantName}</CardTitle>
                    <CardSubtitle>Case no. {this.props.item.caseNumber}</CardSubtitle>
                    <CardText>Cosigner : {this.props.item.cosignerName}</CardText>
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
