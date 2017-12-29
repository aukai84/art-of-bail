import React, {Component} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class DeleteCaseModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            modall: false
        }
        this.toggle = this.toggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    toggle(){
        this.setState({
            modal: !this.state.modal
        })
    }

    handleDelete(){
        this.props.auth.fetch(`${this.props.auth.domain}/admin/edit-cases/remove/${this.props.item._id}`,{method: 'DELETE'})
            .then(res => {
                this.toggle();
                this.props.isModal ? this.props.url.replace('/admin-dashboard') : this.props.deleteCase(this.props.item._id)
            })
            .catch(err => {
                alert(err)
            })
    }

    render(){
        return(
            <div>
                {this.props.isModal ? (<Button color="danger" onClick={this.toggle}>Delete</Button>) : (<div onClick={this.toggle}>x</div>)}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalBody>
                        <div>Are you sure you want to close this case?</div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.handleDelete}>Yes</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
    }

export default DeleteCaseModal;
