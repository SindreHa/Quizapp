import React, { useState } from 'react';
import { CSSTransition }  from 'react-transition-group';
import './App.css';
import Quiz from './components/Quiz';

function App() {

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

  const [text, setText] = useState("")

  const hello = () => {
    fetch('http://localhost:8080/api/hello')
    .then(response => response.text())
    .then(message => setText(message))
  }

  //hello()

  return (
    <div className="App">
      <SlideIn in={true} delay={0}>
        <Quiz />
      </SlideIn>
    </div>
  );
}

export default App;
