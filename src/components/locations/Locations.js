import React, { Component } from 'react';
import './Locations.css'

export default class Locations extends Component {
    render() {
        return (
            <div className="locations">
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            <h2>{location.name}</h2>
                            <p>Location: {location.location}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}