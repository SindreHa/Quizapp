import React from "react";
import { CSSTransition } from "react-transition-group";

const FadeIn = ({ in: inProp, ...props }) => (
  <CSSTransition
    in={inProp}
    timeout={{ appear: 0, enter: 0, exit: 200 }}
    classNames="fadeIn"
    unmountOnExit
    {...props}
  />
);

const QuizAnswers = (props) => {
  let questions,
    answers,
    userAnswers = [];
  if (!props.loading) {
    questions = props.questions.replace(/[\[\]']+/g, "").split(", ");
    answers = props.answers.replace(/[\[\]']+/g, "").split(", ");
    userAnswers = props.userAnswers.replace(/[\[\]']+/g, "").split(", ");
  }

  return (
    <FadeIn in={!props.hidden}>
      <div className="answers-wrapper">
        {questions.map((question, i) => (
          <div className="answer-container">
            <h4 className="question">{question}</h4>
            <p className="answer">{answers[i]}</p>
            { userAnswers[i] === answers[i] ? null : (
                <div className="userAnswer">
                <p className={
                    userAnswers[i] === answers[i] ? null : "wrong-answer"
                    }>{userAnswers[i]}</p>
                </div>
            )

            }
            
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

export default QuizAnswers;
