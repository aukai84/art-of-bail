import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup, FormText} from 'reactstrap';
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

    handleAdd(){
        this.toggle();
    }

    render(){
        return(
            <div>
                <Button className="addCaseButton" size="sm" color="secondary" onClick={this.toggle}>Add Case</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="addCaseModal">
                    <ModalHeader toggle={this.togglel}>Add New Case</ModalHeader>
                    <ModalBody>
                        <div>This will be where we place the case forms</div>
                        <div>Loading Example</div>
                        <ReactLoading type="cylon" color="cornflowerblue" height="667" width="375" delay={500} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleAdd}>Submit</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default AddCaseModal;
