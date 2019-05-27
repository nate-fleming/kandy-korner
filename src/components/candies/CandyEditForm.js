import React, { Component } from "react"
import candyManager from "../../modules/candyManager"

export default class AnimalEditForm extends Component {
    // Set initial state
    state = {
        candyName: "",
        typeId: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingCandy = evt => {
        evt.preventDefault()

        if (this.state.candyType === "") {
            window.alert("Please select a type");
        } else {
            const editedCandy = {
                id: this.props.match.params.candyId,
                name: this.state.candyName,
                typeId: this.state.typeId
            };

            this.props.updateCandy(editedCandy)
        }
    }

    componentDidMount() {
        candyManager.get(this.props.match.params.candyId)
            .then(candy => {
                this.setState({
                    candyName: candy.name,
                    typeId: candy.typeId
                });
            });
    }


    render() {
        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="candyName">Candy Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="candyName"
                            value={this.state.candyName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Assign a Type</label>
                        <select
                            name="employee"
                            id="employeeId"
                            onChange={this.handleFieldChange}
                            value={this.state.typeId}
                        >
                            <option value="">Select a Type</option>
                            {this.props.candyTypes.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        onClick={this.updateExistingCandy}
                        className="btn btn-primary"
                    >
                        Submit
            </button>
                </form>
            </React.Fragment>
        );
    }
}