import React, { Component } from 'react';
import './Candies.css'
import CandyCard from './CandyCard'


export default class Candies extends Component {


    render() {
        return (
            <div className="candy-list">
                <div className="new-candy">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/candies/new")
                        }
                        }>
                        Add Candy
                    </button>
                </div>
                <div className="candies">
                    {
                        this.props.candies.map(candy => {
                            return <CandyCard key={candy.id} candy={candy}
                                candyTypes={this.props.candyTypes} {...this.props} />
                        })
                    }
                </div>
            </div>
        )
    }
}