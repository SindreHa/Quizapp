import React, { Component } from 'react'

export default function Options(props) {

    return (
        <>
        {   
            props.options.map((option) => (
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