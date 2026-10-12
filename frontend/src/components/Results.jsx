import { useState } from "react";
import "../css/results.css";
import { Oval } from "react-loader-spinner";
import PropTypes from "prop-types";
import QuizAnswers from "./QuizAnswers";

export default function Results(props) {

  // State variabler med Set metoder
  const { result, loading, nodeRef } = props;
  const [ hidden, setHidden ] = useState(true)

  if (loading) {
    return (
      <div ref={nodeRef} className="results-container" style={{ padding: "100px 0" }}>
        <Oval height={80} width={80} color="#2a9d8f" secondaryColor="#2a9d8f" wrapperStyle={{ justifyContent: "center" }} />
      </div>
    );
  } else {
    return (
      <div ref={nodeRef} className="results-container">
        <h1>Resultat</h1>
        <h2>{result.score > result.questions.length / 2 ? "🥳" : "😕"}</h2>
        <p>{`Du klarte ${result.score} av ${result.questions.length} spørsmål`}</p>
        <button onClick={() => setHidden(!hidden)}>{hidden ? "Se fasit" : "Skjul fasit"}</button>
        <QuizAnswers 
          hidden={hidden}
          questions={result.questions} 
          answers={result.answers} 
          userAnswers={result.userAnswers}/>
        <button onClick={() => props.setDone(false)}>Ta quiz på nytt</button>
      </div>
    );
  }
}

// Typechecking proptypes
Results.propTypes = {
  nodeRef: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  setDone: PropTypes.func.isRequired
}
