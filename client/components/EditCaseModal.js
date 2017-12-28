import React, {Component} from 'react';
import {Row, Col, Card, CardTitle, CardSubtitle,  CardImg, CardText, CardBody, Form, FormGroup, FormText, Button, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import editCaseStyles from '../styles/editCaseStyles.js';

class EditCaseModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
        this.deleteCase = this.deleteCase.bind(this);
        this.editCase = this.editCase.bind(this);
        this.handleInput = this.handleInput.bind(this);
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
                    totalBailAmount: this.state.totalBailAmount,
                    totalBailOutstanding: this.state.totalBailOutstanding,
                    defendantPhone: this.state.defendantPhone
                }
            }) 
        })
            .then(res => {
                console.log('edited item', res)
                this.toggle();
            })
    }

    handleInput(e, fieldName){
        e.preventDefault();
        this.setState({
            [fieldName]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <Button className="edit-case-button" size="sm" color="primary" onClick={this.toggle}>Edit Case</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>{this.props.item.defendantName} {this.props.item.caseNumber}</ModalHeader>
                    <ModalBody>
                        <div>
                            <Form>
                                <FormGroup>
                                    <Label for="total-bail-input">Bail Amount</Label>
                                    <Input id="total-bail-input" type="number" defaultValue={this.props.item.totalBailAmount} onChange={e=>{this.handleInput(e,"totalBailAmount")}}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="bail-outstanding-input">Bail Outstanding</Label>
                                    <Input id="bail-outstanding-input" type="number" defaultValue={this.props.item.totalBailOutstanding} onChane={e=>{this.handleInput(e,"totalBailOutstanding")}}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="defendant-phone-input">Defendant Phone</Label>
                                    <Input id="defendant-phone-input" defaultValue={this.props.item.defendantPhone} type="tel" onChange={e=>{this.handleInput(e, "defendantPhone")}}/>
                                </FormGroup>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.editCase}>Submit</Button>
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </Form>
                        </div>
                    </ModalBody>
                </Modal>
                <style jsx global>{editCaseStyles}</style>
            </div>
        )
    }
}

export default EditCaseModal;
