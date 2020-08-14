import React from 'react'
import '../css/results.css'

export default function Results(props) {

    const {result, numQuestions} = props;

    return (
        <div className="results-container">
            <h1>Resultat</h1>
            <h2>{result > numQuestions/2 ? "🥳" : "😕"}</h2>
            <p>{`Du klarte ${result} av ${numQuestions} spørsmål`}</p>
            <button 
                onClick={() => props.setDone(false)}>
                Ta quiz på nytt
            </button>
        </div>
    )
}
