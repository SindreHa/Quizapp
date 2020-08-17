import React from "react";
import "../css/progressIndicator.css";
import PropTypes from "prop-types";

export default function ProgressIndicator(props) {
  return (
    <div className="progress-container">
      {props.quizData.map((data, i) => (
        <div
          key={i}
          id={i === props.currentQuestionIndex ? "currentPosition" : null}
        />
      ))}
    </div>
  );
}

// Typechecking proptypes
ProgressIndicator.propTypes = {
  quizData: PropTypes.array.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
};
