import React, { useRef, createRef } from "react";
import { CSSTransition } from "react-transition-group";

/**
 * Komponent animasjon
 * @param {Boolean} in - boolean for om komponent skal animeres inn/ut
 */
const FadeIn = ({ in: inProp, nodeRef: nodeRef, ...props }) => (
  <CSSTransition
    in={inProp}
    nodeRef={nodeRef}
    timeout={{ appear: 0, enter: 0, exit: 200 }}
    classNames="fadeIn"
    unmountOnExit
    {...props}
  />
);

export default function QuizAnswers(props) {
  // nodeRef for CSSTransition
  const nodeRef = useRef(null)

  // Sett array variabler med split av strings hentet fra DB
  let questions,
    answers,
    userAnswers = [];
  if (!props.loading) {
    // eslint-disable-next-line
    questions = props.questions.replace(/[\[\]']+/g, "").split(", ");
    // eslint-disable-next-line
    answers = props.answers.replace(/[\[\]']+/g, "").split(", ");
    // eslint-disable-next-line
    userAnswers = props.userAnswers.replace(/[\[\]']+/g, "").split(", ");
  }

  return (
    <FadeIn in={!props.hidden}>
      <div ref={nodeRef}  className="answers-wrapper">
        {questions.map((question, i) => (
          <div key={i} className="answer-container">
            <h4>{question}</h4>
            <p>{answers[i]}</p>
            { userAnswers[i] === answers[i] ? null : (
                <p 
                  className={userAnswers[i] === answers[i] ? null : "wrong-answer"}>
                  {userAnswers[i]}
                </p>
            )}
          </div>
        ))}
      </div>
    </FadeIn>
  );
};
