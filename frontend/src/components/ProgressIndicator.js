import React from 'react'

export default function ProgressIndicator(props) {
    return (
        <div className="progress-container">
            { 
                props.quizData.map((data, i) => (
                    <div key={i} id={i === props.currentQuestion ? "currentPosition" : null}/>
                ))
            }
        </div>
    )
}
