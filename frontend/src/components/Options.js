import React, { Component } from 'react'

export default function Options(props) {

    const print = (msg) => console.log(msg)
    print()

    return (
        <>
        {   
            props.options.map((option, i) => (
                <div 
                    onClick={() => {
                        props.handler(i)
                    }}
                    key={option.id} 
                    className={`option
                    ${props.myAnswer === i ? "selected" : null}`}>
                    <p>{option}</p>
                </div>
            ))
        }
        </>
    )
}