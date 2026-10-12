import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

/**
 * Komponent animasjon
 * @param {Boolean} in - boolean for om komponent skal animeres inn/ut
 */
const FadeIn = ({ in: inProp, nodeRef, ...props }) => (
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

  const { questions = [], answers = [], userAnswers = [] } = props;

  return (
    <FadeIn in={!props.hidden} nodeRef={nodeRef}>
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
