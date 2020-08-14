import React, { Component } from 'react'

export default class Options extends Component {

    render() {
        return (
            <>
            {   
                this.props.options.map((option) => (
                    <div 
                        key={option.id} 
                        className="option">
                        <p>{option}</p>
                    </div>
                ))
            }
            </>
        )
    }
}
