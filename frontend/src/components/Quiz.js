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
            options: [],
            myAnswer: null,
            answers: [],
            disableButton: true
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
            questionId: quizData[this.state.currentQuestion].id,
            question: quizData[this.state.currentQuestion].question,
            answer: quizData[this.state.currentQuestion].answer,
            options: quizData[this.state.currentQuestion].options
          };
        });
    }

    logAnswer = () => {
        const answer = 
            {
                question: this.state.questionId,
                answer: this.state.myAnswer
            }

        this.setState(prevState => ({
            answers: [...prevState.answers, answer]
        }))
    }

    nextQuestionHandler = () => {
        this.logAnswer()
        this.setState({myAnswer: null, disableButton: true})
        //const { myAnswer, answer, score } = this.state;

        /* if (myAnswer === answer) {
            this.setState({
            score: score + 1
            });
        } */

        this.setState({
            currentQuestion: this.state.currentQuestion+1
        });
    }
    
    selectionHandler = answer => {
        this.setState({ myAnswer: answer, disableButton: false });
    }

    render() {

        const {
            question, 
            options, 
            currentQuestion, 
            myAnswer, 
            disableButton} 
        = this.state;

        return (
            <div className="quiz-container">
                <Question question={question}/>
                <ProgressIndicator quizData={quizData} currentQuestion={currentQuestion}/>
                <Options options={options} handler={this.selectionHandler} myAnswer={myAnswer}/>
                <button 
                    disabled={disableButton}
                    onClick={() => this.nextQuestionHandler()}>
                    Neste spørsmål
                </button>
            </div>
        )
    }
}
