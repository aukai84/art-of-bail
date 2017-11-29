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
        this.editCase = this.editCase.bind(this);
    }

    toggle(){
        this.setState({
            modal: !this.state.modal 
        })
    }

    deleteCase(){
        this.props.auth.fetch(`${this.props.auth.domain}/admin/edit-cases/remove/${this.props.item._id}`, {method: 'DELETE'})
            .then(res => {
                this.props.deleteCase(res.id);
            })
    }

    editCase(e){
        e.preventDefault();
        this.props.auth.fetch(`${this.props.auth.domain}/admin/edit-cases/${this.props.item._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                updateCase: {
                    totalBailOutstanding: this.totalBailOutstanding.value,
                    defendantPhone: this.defendantPhone.value
                }
            }) 
        })
            .then(res => {
                console.log('edited item', res)
                this.props.editCase(res);
                this.toggle();
            })
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
                    <ModalHeader>{this.props.item.defendantName} {this.props.item.caseNumber}</ModalHeader>
                    <ModalBody>
                        <div>
                            <Form>
                                <FormGroup>
                                    <Label for="bail-outstanding-input">Bail Outstanding</Label>
                                    <Input id="bai-outstanding-input" type="number" defaultValue={this.props.item.totalBailOutstanding} getRef={input=>(this.totalBailOutstanding=input)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="defendant-phone-input">Defendant Phone</Label>
                                    <Input id="defendant-phone-input" defaultValue={this.props.item.defendantPhone} type="tel" getRef={input=>(this.defendantPhone=input)} />
                                </FormGroup>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.editCase}>Submit</Button>
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </Form>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default EditCaseModal;
