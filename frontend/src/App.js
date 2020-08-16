import React, { useState, Component } from 'react';
import { CSSTransition }  from 'react-transition-group';
import './App.css';
import Quiz from './components/Quiz';
import Results from './components/Results';


export default function App() {

  const SlideIn = ({in: inProp, children, delay}) => (
    <CSSTransition
        unmountOnExit
        in={inProp}
        timeout={delay}
        classNames='slideIn'
        appear >
            {children}
    </CSSTransition>
  );

  const fetchResults = (data) => {
    console.log(JSON.stringify(data))
      fetch('http://localhost:8080/results', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        setResult(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  const [isDone, setDone] = useState(false)
  const [result, setResult] = useState(null)


    return (
      <div className="App">
        <h1 id="header">Quiz app</h1>
        <SlideIn in={!isDone} delay={0}>
          <Quiz 
            isDone={isDone} 
            setDone={setDone}
            fetchResults={fetchResults}/>
        </SlideIn>
        <SlideIn in={isDone} delay={0}>
          <Results 
            setDone={setDone} 
            numQuestions={4} 
            result={result}/>
        </SlideIn>
      </div>
    );
  }
