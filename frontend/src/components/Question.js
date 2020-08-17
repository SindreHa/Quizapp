import React from "react";
import PropTypes from 'prop-types';

export default function Question(props) {
  const { question } = props;

  return <h1>{question}</h1>;
}

Question.propTypes = {
  question: PropTypes.string.isRequired
}
