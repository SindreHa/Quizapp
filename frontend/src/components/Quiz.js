import React, { Component } from 'react'
import Question from './Question'
import { quizData } from '../data'
import Options from './Options'
import ProgressIndicator from './ProgressIndicator'
import '../css/quiz.css'

export default class Quiz extends Component {

    constructor() {
        super()
        this.state = {
            currentQuestionIndex: 0,
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
        const {currentQuestionIndex} = this.state;
        /**
         * Sjekker at nåværende index ikke lik 
         * forrige index for å unngå infinite loop
         */
        if(currentQuestionIndex !== prevState.currentQuestionIndex && currentQuestionIndex < quizData.length) {
            this.loadQuizData()
        }
    }

    loadQuizData = () => {
        const {currentQuestionIndex} = this.state;

        this.setState({
            questionId: quizData[currentQuestionIndex].id,
            question: quizData[currentQuestionIndex].question,
            options: quizData[currentQuestionIndex].options
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

        if (this.state.currentQuestionIndex === quizData.length-1) {
            this.props.setDone(true)
        }

        this.setState({
            currentQuestionIndex: this.state.currentQuestionIndex+1
        });
    }
    
    selectionHandler = answer => {
        this.setState({ myAnswer: answer, disableButton: false });
    }

    render() {

        const {
            question, 
            options, 
            currentQuestionIndex, 
            myAnswer, 
            disableButton} 
        = this.state;

        return (
            <div ref={this.props.ref} className="quiz-container">
                <Question 
                    question={question}/>
                <ProgressIndicator 
                    quizData={quizData} 
                    currentQuestionIndex={currentQuestionIndex}/>
                <Options 
                    options={options} 
                    handler={this.selectionHandler} 
                    myAnswer={myAnswer}/>
                <button 
                    disabled={disableButton}
                    onClick={() => this.nextQuestionHandler()}>
                    {
                        currentQuestionIndex < quizData.length-1 
                            ? "Neste spørsmål" 
                            : "Se resultat"
                    }
                </button>
            </div>
        )
    }
}
