import React, { Component } from 'react'
import Question from './Question'
import { quizData } from '../data'
import Options from './Options'
import ProgressIndicator from './ProgressIndicator'

export default class Quiz extends Component {

    constructor() {
        super()
        this.state = {
            currentQuestion: 0,
            options: []
        }
    }

    componentDidMount() {
        this.loadQuizData()
    }

    componentDidUpdate(prevProps, prevState) {
        const {currentQuestion} = this.state;
        /**
         * Sjekker at nåværende index ikke lik 
         * forrige index for å unngå infinite loop
         */
        if(currentQuestion !== prevState.currentQuestion && currentQuestion < quizData.length) {
            this.loadQuizData()
        }
    }

    loadQuizData = () => {
        this.setState(() => {
          return {
            question: quizData[this.state.currentQuestion].question,
            answer: quizData[this.state.currentQuestion].answer,
            options: quizData[this.state.currentQuestion].options
          };
        });
      };

    nextQuestionHandler = () => {
    //const { myAnswer, answer, score } = this.state;

    /* if (myAnswer === answer) {
        this.setState({
        score: score + 1
        });
    } */

    this.setState({
        currentQuestion: this.state.currentQuestion+1
    });
    };

    render() {

        const {question, options, currentQuestion} = this.state;

        return (
            <div className="quiz-container">
                <Question question={question}/>
                <ProgressIndicator quizData={quizData} currentQuestion={currentQuestion}/>
                <Options options={options} />
                <button 
                    onClick={() => this.nextQuestionHandler()}>
                    Neste spørsmål
                </button>
            </div>
        )
    }
}
