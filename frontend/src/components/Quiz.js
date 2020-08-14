import React, { Component } from 'react'
import Question from './Question'
import { quizDataset } from '../data'
import Options from './Options'
import ProgressIndicator from './ProgressIndicator'
import '../css/quiz.css'

export default class Quiz extends Component {

    constructor() {
        super()
        this.state = {
            questionId: null,
            myAnswer: null,
            currentQuestionIndex: 0,
            answers: [],
            disableButton: true,
            quizDataset: []
        }
    }

    componentWillMount() {
        this.loadQuizData()
    }

    loadQuizData = () => {
        this.setState({
            quizDataset: quizDataset
         });
    }

    logAnswer = () => {
        const answer = 
            {
                question: this.state.currentQuestionIndex,
                answer: this.state.myAnswer
            }

        this.setState(prevState => ({
            answers: [...prevState.answers, answer]
        }))
    }

    nextQuestionHandler = () => {
        this.logAnswer()
        this.setState({myAnswer: null, disableButton: true})

        if (this.state.currentQuestionIndex === this.state.quizDataset.length-1) {
            this.props.setDone(true)
        }

        this.setState({
            currentQuestionIndex: this.state.currentQuestionIndex+1
        });
    }

    selectionHandler = answer => {
        this.setState({ 
            myAnswer: answer, 
            disableButton: false,
        });
    }

    render() {

        const {
            currentQuestionIndex, 
            myAnswer,
            quizDataset,
            disableButton} 
        = this.state;

        return (
            <div ref={this.props.ref} className="quiz-container">
                <Question 
                    question={quizDataset[currentQuestionIndex].question}/>
                <ProgressIndicator 
                    quizData={quizDataset} 
                    currentQuestionIndex={currentQuestionIndex}/>
                <Options 
                    quizData={quizDataset[currentQuestionIndex]}
                    myAnswer={myAnswer}
                    currentQuestionIndex={currentQuestionIndex}
                    handler={this.selectionHandler}/>
                <button 
                    disabled={disableButton}
                    onClick={() => this.nextQuestionHandler()}>
                    {
                        currentQuestionIndex < quizDataset.length-1 
                            ? "Neste spørsmål" 
                            : "Se resultat"
                    }
                </button>
            </div>
        )
    }
}
