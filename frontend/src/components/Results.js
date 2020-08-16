import React from 'react'
import '../css/results.css'
import Loader from 'react-loader-spinner'

export default function Results(props) {

    const {result, numQuestions} = props;

    if (result == null) {
        return (
            <div className="results-container" style={{padding: "100px 0"}}>
                <Loader type="Oval" color="#2a9d8f" loading={result}/>
            </div>
        )
    } else {
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
    
}
