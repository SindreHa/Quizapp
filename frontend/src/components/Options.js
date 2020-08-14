import React from 'react'

export default function Options(props) {

    return (
        <>
        {   
            props.quizData.options.map((option, i) => (
                <div 
                    onClick={() => {
                        props.handler(i)
                    }}
                    key={i} 
                    className={`option
                    ${props.myAnswer === i ? "selected" : null}`}>
                    <p>{option}</p>
                </div>
            ))
        }
        </>
    )
}