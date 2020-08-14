import React, { useState } from 'react';
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

  const [isDone, setDone] = useState(false)

  /* const hello = () => {
    fetch('http://localhost:8080/api/hello')
    .then(response => response.text())
    .then(message => setText(message))
  } */

  //hello()

  return (
    <div className="App">
      <SlideIn in={!isDone} delay={0}>
        <Quiz isDone={isDone} setDone={setDone}/>
      </SlideIn>
      <SlideIn in={isDone} delay={0}>
        <Results setDone={setDone} result={"4 riktige"}/>
      </SlideIn>
    </div>
  );
}
