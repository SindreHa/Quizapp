import React, { useState, Component } from 'react';
import { CSSTransition }  from 'react-transition-group';
import './App.css';
import Quiz from './components/Quiz';
import Results from './components/Results';

  
const SlideIn = ({in: inProp, ...props}) => (
  <CSSTransition
      in={inProp}
      timeout={{ appear: 0, enter: 550, exit: 550 }}
      classNames='slideIn'
      appear
      unmountOnExit
      {...props} />
);

export default function App() {


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
  
  const [gameDone, setDone] = useState(false)
  const [result, setResult] = useState(null)


    return (
      <div className="App">
        <h1 id="header">Quiz app</h1>
        <SlideIn in={!gameDone}>
          <Quiz 
            gameDone={gameDone} 
            setDone={setDone}
            fetchResults={fetchResults}/>
        </SlideIn>
        <SlideIn in={gameDone}>
          <Results 
            setDone={setDone} 
            numQuestions={4} 
            result={result}/>
        </SlideIn>
      </div>
    );
  }
