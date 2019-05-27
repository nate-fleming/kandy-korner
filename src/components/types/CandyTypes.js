import React, { Component } from 'react';
import './CandyTypes.css'

export default class CandyTypes extends Component {
    render() {
        return (
            <div className="types">
                {
                    this.props.candyTypes.map(type =>
                        <h2 key={type.id}>
                            Candy Type: {type.type}
                        </h2>
                    )
                }
            </div>
        )
    }
}