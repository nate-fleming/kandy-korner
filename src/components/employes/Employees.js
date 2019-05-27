import React, { Component } from 'react';
import './Employees.css'

export default class Employees extends Component {
    render() {
        return (
            <div className="employees">
                {
                    this.props.employees.map(employee =>
                        <h2 key={employee.id}>
                            Employee: {employee.name}
                        </h2>
                    )
                }
            </div>
        )
    }
}