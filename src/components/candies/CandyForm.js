import React, { Component } from 'react'

export default class CandyForm extends Component {

    state = {
        candyName: "",
        typeId: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    constructNewCandy = evt => {
        if (this.state.candyType === "") {
            window.alert("Please select a type");
        } else {
            const candy = {
                name: this.state.candyName,
                typeId: parseInt(this.state.typeId),
            };

            // Create the animal and redirect user to animal list
            this.props
                .addCandy(candy)
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="candyForm">
                    <div className="form-group">
                        <label htmlFor="candyName">Candy</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="candyName"
                            placeholder="Candy Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="types">Assign a Candy Type</label>
                        <select
                            defaultValue=""
                            name="type"
                            id="typeId"
                            onChange={this.handleFieldChange}
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
                        type="button"
                        onClick={this.constructNewCandy}
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </React.Fragment>
        )
    }
}
