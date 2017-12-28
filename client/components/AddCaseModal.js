import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroup, InputGroupAddon, Label, Form, FormGroup, FormText} from 'reactstrap';
import addCaseStyles from '../styles/addCaseStyles.js';

class AddCaseModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            defendantName:'',
            defendantPhone: '',
            cosignerName: '',
            cosignerPhone: '',
            stateCaseLink: '',
            totalBailAmount:'',
            totalBailOutstanding:'',
            BailPaymentDueDate: ''
        }
        this.toggle = this.toggle.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    toggle(){
        this.setState({
            modal: !this.state.modal
        })
    }

    handleInput(e, fieldName){
        e.preventDefault();
        this.setState({
            [fieldName]: e.target.value
        })
    }

    handleAdd(e){
        e.preventDefault();
        this.props.auth.fetch(`${this.props.auth.domain}/admin/edit-cases/new-case`, {
            method: 'POST',
            body: JSON.stringify({
                newCase: {
                    defendantName: this.state.defendantName,
                    defendantPhone: this.state.defendantPhone,
                    cosignerName: this.state.cosignerName,
                    cosignerPhone: this.state.cosignerPhone,
                    stateCaseLink: this.state.stateCaseLink,
                    totalBailAmount: this.state.totalBailAmount,
                    totalBailOutstanding: this.state.totalBailOutstanding,
                    BailPaymentDueDate: this.state.BailPaymentDueDate
                }
            })
        })
            .then(res => {
                this.props.addCase(res.case);
                this.toggle();
            })
    }

    render(){
        console.log('defName', this.state)
        return(
            <div>
                <Button className="add-case-button" size="sm" onClick={this.toggle}>Add Case</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="addCaseModal">
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="add-defendant-name">Defendant Name<span className="required">*</span></Label>
                                <Input type="text" id="add-defendant-name" placeholder="Defendant Name" onChange={e=>{this.handleInput(e,"defendantName")}}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-defendant-phone">Defendant Phone<span className="required">*</span></Label>
                                <Input type="tel" id="add-defendant-phone" placeholder="(xxx)xxx-xxxx" onChange={e=>{this.handleInput(e,"defendantPhone")}}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-cosigner-name">Cosigner Name<span className="required">*</span></Label>
                                <Input type="text" id="add-cosigner-name" placeholder="Cosigner Name" onChange={e=>{this.handleInput(e,"cosignerName")}}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-cosigner-phone">Cosigner Phone<span className="required">*</span></Label>
                                <Input type="tel" id="add-cosigner-phone" placeholder="(xxx)xxx-xxxx" onChange={e=>{this.handleInput(e,"cosignerPhone")}}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-state-link">State Case Link<span className="required">*</span></Label>
                                <Input type="url" id="add-state-link" placeholder="http://" onChange={e=>{this.handleInput(e,"stateCaseLink")}}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-total-bail">Total Bail Amount<span className="required">*</span></Label>
                                <Input type="number" id="add-total-bail" placeholder="$" onChange={e=>{this.handleInput(e,"totalBailAmount")}}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-bail-outstanding">Total Bail Outstanding<span className="required">*</span></Label>
                                <Input type="number" id="add-bail-outstanding" placeholder="$" onChange={e=>{this.handleInput(e,"totalBailOutstanding")}}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-bail-due-date">Bail Payment Due Date<span className="required">*</span></Label>
                                <Input type="date" id="add-bail-due-date" placeholder="YYYY/MM/DD" onChange={e=>{this.handleInput(e,"BailPaymentDueDate")}}/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" size="md" onClick={this.handleAdd} block>CREATE CASE</Button>
                    </ModalFooter>
                </Modal>
                <style jsx global>{addCaseStyles}</style>
            </div>
        )
    }
}

export default AddCaseModal;
