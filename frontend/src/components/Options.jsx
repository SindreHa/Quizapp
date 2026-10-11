import React from "react";
import PropTypes from "prop-types";

export default function Options(props) {
  // Split string til array
  const optionsArray = props.quizData.options.split(", ");

  return (
    <>
      {optionsArray.map((option, i) => (
        <div
          onClick={() => {
            props.handler(i);
          }}
          key={i}
          className={`option
                ${props.myAnswer === i ? "selected" : null}`}
        >
          <p>{option}</p>
        </div>
      ))}
    </>
  );
}

// Typechecking proptypes
Options.propTypes = {
  quizData: PropTypes.object.isRequired,
  myAnswer: PropTypes.number.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};
