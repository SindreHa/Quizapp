import React, { useState } from "react";
import "../css/results.css";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";
import QuizAnswers from "./QuizAnswers";

export default function Results(props) {
  const { result, loading } = props;
  const [ hidden, setHidden ] = useState(true)

  if (loading) {
    return (
      <div className="results-container" style={{ padding: "100px 0" }}>
        <Loader type="Oval" color="#2a9d8f" loading={loading} />
      </div>
    );
  } else {
    return (
      <div className="results-container">
        <h1>Resultat</h1>
        <h2>{result.score > result.questions.split(", ").length / 2 ? "🥳" : "😕"}</h2>
        <p>{`Du klarte ${result.score} av ${result.questions.split(", ").length} spørsmål`}</p>
        <button onClick={() => setHidden(!hidden)}>{hidden ? "Se fasit" : "Skjul fasit"}</button>
        <QuizAnswers 
          hidden={hidden}
          questions={result.questions} 
          answers={result.answers} 
          userAnswers={result.userAnswers}
          loading={loading}/>
        <button onClick={() => props.setDone(false)}>Ta quiz på nytt</button>
      </div>
    );
  }
}

Results.propTypes = {
  result: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  setDone: PropTypes.func.isRequired
}
