import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

/**
 * Komponent animasjon
 * @param {Boolean} in - boolean for om komponent skal animeres inn/ut
 */
const SlideIn = ({ in: inProp, nodeRef: nodeRef, ...props }) => (
  <CSSTransition
    in={inProp}
    nodeRef={nodeRef}
    timeout={{ appear: 0, enter: 550, exit: 550 }}
    classNames="slideIn"
    appear
    unmountOnExit
    {...props}
  />
);

export default function App() {
  // State variabler med Set metoder
  const [gameDone, setDone] = useState(false);
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);

  /**
   * Hent resultat for runde
   * @param {Object} answers - objekt med svar på spørsmål
   */
  const fetchResults = (answers) => {
    //console.log(JSON.stringify(data));
    fetch("http://localhost:8080/results", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answers),
    })
      .then((response) => response.json())
      .then((result) => {
        //console.log(data)
        setResult(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <h1 id="header">Quiz app</h1>
      <SlideIn in={!gameDone}>
        <Quiz
          gameDone={gameDone}
          setDone={setDone}
          fetchResults={fetchResults}
        />
      </SlideIn>
      <SlideIn in={gameDone}>
        <Results setDone={setDone} loading={loading} result={result} />
      </SlideIn>
    </>
  );
}
