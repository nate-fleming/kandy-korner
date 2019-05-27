import React, { Component } from 'react'
import candy from './candy2.png'
import Modal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('div')

export default class CandyDetails extends Component {

    state = {
        saveDisabled: false,
        modalIsOpen: false
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }


    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    handleClick = (e) => {
        this.setState(
            { saveDisabled: true }
        )
        this.props.deleteCandy(this.props.candy.id)
    }

    render() {
        return (
            <div key={this.props.candy.id} className="candy-detail">
                <h2>
                    {this.props.candy.name}
                </h2>
                <img src={candy} className="candy-icon" alt="candy" />
                <p>
                    Type:&nbsp;
                                    {
                        (this.props.candyTypes.length > 0) ?
                            this.props.candyTypes.find(type => type.id === this.props.candy.typeId).type
                            :
                            ""
                    }
                </p>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push(`/candies/edit/${this.props.candy.id}`);
                    }}
                >
                    Edit
                </button>
                <button onClick={this.openModal}>Delete</button>
                <Modal isOpen={this.state.modalIsOpen}
                    conRequestClose={this.closeModal}
                    deleteAnimal={this.deleteAnimal}
                    style={customStyles}>
                    <h2>Are you sure?</h2>
                    <button onClick={this.handleClick} disabled={this.state.saveDisabled}>Yes</button>
                    <button onClick={this.closeModal}>No</button>
                </Modal>
            </div>
        )
    }
}
