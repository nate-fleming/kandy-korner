import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import candy from './candy2.png'

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

export default class CandyCard extends Component {

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
            <div className="candy">
                <img src={candy} className="candy-icon" alt="candy" />
                <h2> {this.props.candy.name}</h2>
                <Link to={`/candies/detail/${this.props.candy.id}`}><button>Details</button></Link>
                <button onClick={this.openModal}>Delete</button>
                <Modal isOpen={this.state.modalIsOpen}
                    conRequestClose={this.closeModal}
                    deleteAnimal={this.deleteAnimal}
                    style={customStyles}>
                    <h2>Are you sure?</h2>
                    <button onClick={this.handleClick} disabled={this.state.saveDisabled}>Yes</button>
                    <button onClick={this.closeModal}>No</button>
                </Modal>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push(`/candies/edit/${this.props.candy.id}`);
                    }}
                >
                    Edit
                </button>
            </div>
        )
    }
}
