import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroup, InputGroupAddon, Label, Form, FormGroup, FormText} from 'reactstrap';
import ReactLoading from 'react-loading';

class AddCaseModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    toggle(){
        this.setState({
            modal: !this.state.modal
        })
    }

    handleAdd(e){
        e.preventDefault();
        console.log('sanity check defendant..', this.defendantName.value)
        this.props.auth.fetch(`${this.props.auth.domain}/admin/edit-cases/new-case`, {
            method: 'POST',
            body: JSON.stringify({
                newCase: {
                    defendantName: this.defendantName.value,
                    defendantPhone: this.defendantPhone.value,
                    cosignerName: this.cosignerName.value,
                    cosignerPhone: this.cosignerPhone.value,
                    stateCaseLink: this.stateCaseLink.value,
                    totalBailAmount: this.totalBailAmount.value,
                    totalBailOutstanding: this.totalBailOutstanding.value,
                    BailPaymentDueDate: this.BailPaymentDueDate.value
                }
            })
        })
            .then(res => {
                console.log('newly added case..', res)
            })
    }

    render(){
        return(
            <div>
                <Button className="addCaseButton" size="sm" color="secondary" onClick={this.toggle}>Add Case</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="addCaseModal">
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="add-defendant-name">Defendant Name<span className="required">*</span></Label>
                                <Input type="text" id="add-defendant-name" placeholder="Defendant Name" getRef={input=>this.defendantName=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-defendant-phone">Defendant Phone<span className="required">*</span></Label>
                                <Input type="tel" id="add-defendant-phone" placeholder="(xxx)xxx-xxxx" getRef={input=>this.defendantPhone=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-cosigner-name">Cosigner Name<span className="required">*</span></Label>
                                <Input type="text" id="add-cosigner-name" placeholder="Cosigner Name" getRef={input=>this.cosignerName=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-cosigner-phone">Cosigner Phone<span className="required">*</span></Label>
                                <Input type="tel" id="add-cosigner-phone" placeholder="(xxx)xxx-xxxx" getRef={input=>this.cosignerPhone=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-state-link">State Case Link<span className="required">*</span></Label>
                                <Input type="url" id="add-state-link" placeholder="http://" getRef={input=>this.stateCaseLink=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-total-bail">Total Bail Amount<span className="required">*</span></Label>
                                <Input type="number" id="add-total-bail" placeholder="$" getRef={input=>this.totalBailAmount=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-bail-outstanding">Total Bail Outstanding<span className="required">*</span></Label>
                                <Input type="number" id="add-bail-outstanding" placeholder="$" getRef={input=>this.totalBailOutstanding=input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="add-bail-due-date">Bail Payment Due Date<span className="required">*</span></Label>
                                <Input type="date" id="add-bail-due-date" placeholder="YYYY/MM/DD" getRef={input=>this.BailPaymentDueDate=input}/>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" size="md" onClick={this.handleAdd} block>CREATE CASE</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default AddCaseModal;
