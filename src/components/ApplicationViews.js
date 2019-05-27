import { Route } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from 'react-router'
import Employees from './employes/Employees'
// import CandyTypes from './types/CandyTypes'
import Candies from './candies/Candies'
import Locations from './locations/Locations'
import candyManager from '../modules/candyManager'
import EmployeeManager from '../modules/EmployeeManager';
import LocationManager from '../modules/LocationManager';
import CandyDetails from './candies/CandyDetails';
import CandyForm from './candies/CandyForm'
import CandyEditForm from './candies/CandyEditForm'




class ApplicationViews extends Component {
    state = {
        locations: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    componentDidMount() {
        const newState = {}

        candyManager.getAll()
            .then(candies => newState.candies = candies)
            .then(EmployeeManager.getAll)
            .then(employees => newState.employees = employees)
            .then(candyManager.getAllTypes)
            .then(types => newState.candyTypes = types)
            .then(LocationManager.getAll)
            .then(locations => newState.locations = locations)
            .then(() => this.setState(newState))
    }

    addCandy = candy => {
        candyManager.post(candy)
            .then(candyManager.getAll)
            .then(candies => this.setState({ candies: candies }))
            .then(() => this.props.history.push("/candies"));
    }

    deleteCandy = id => {
        candyManager.deleteCandy(id)
            .then(candyManager.getAll)
            .then(candies => {
                this.props.history.push("/candies")
                this.setState({ candies: candies })
            })
    }

    updateCandy = (editedCandyObject) => {
        return candyManager.put(editedCandyObject)
            .then(() => candyManager.getAll())
            .then(candies => {
                this.props.history.push("/candies")
                this.setState({
                    candies: candies
                })
            })
    }



    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Locations locations={this.state.locations} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <Employees employees={this.state.employees} />
                }} />
                <Route exact path="/candies" render={(props) => {
                    return <Candies  {...props} candies={this.state.candies}
                        candyTypes={this.state.candyTypes}
                        deleteCandy={this.deleteCandy} />
                }} />
                <Route path="/candies/new" render={(props) => {
                    return <CandyForm  {...props}
                        addCandy={this.addCandy}
                        candyTypes={this.state.candyTypes} />
                }} />
                <Route exact path="/candies/detail/:candyId" render={(props) => {
                    // Find the animal with the id of the route parameter

                    let candy = this.state.candies.find(candy =>
                        candy.id === props.match.params.candyId
                    )

                    // If the animal wasn't found, create a default one
                    if (!candy) {
                        candy = { id: 404, name: "", type: "" }
                    }

                    return <CandyDetails candy={candy}
                        candyTypes={this.state.candyTypes}
                        deleteCandy={this.deleteCandy}
                        {...props}
                    />
                }} />
                <Route
                    path="/candies/edit/:candyId" render={props => {
                        return <CandyEditForm {...props} candyTypes={this.state.candyTypes} updateCandy={this.updateCandy} />
                    }}
                />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)