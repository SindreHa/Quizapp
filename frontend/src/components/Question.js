import React from 'react'

export default function Question(props) {

    const {question} = props;

    return (
        <h1>
            {question}
        </h1>
    )
}
