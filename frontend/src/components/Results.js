import React from 'react'
import '../css/results.css'

export default function Results(props) {
    return (
        <div className="results-container">
            <h1>Resultat</h1>
            <p>{props.result}</p>
            <button onClick={() => props.setDone(false)}>Ta quiz på nytt</button>
        </div>
    )
}
