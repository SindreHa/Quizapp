import React, { Component } from 'react'
import Question from './Question'
import Options from './Options'
import ProgressIndicator from './ProgressIndicator'
import '../css/quiz.css'
import Loader from 'react-loader-spinner'

export default class Quiz extends Component {

    constructor() {
        super()
        this.state = {
            questionIds: null,
            myAnswer: null,
            currentQuestionIndex: 0,
            answers: [],
            disableButton: true,
            quizDataset: [],
            loading: true
        }
    }
    

    componentDidMount() {
        this.loadQuizData()
    }

    /**
     * Hent datasett for quiz
     */
    loadQuizData = () => {
        fetch("http://localhost:8080/quizDataset")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    quizDataset: result,
                    loading: false
                });
            },
            (error) => {
                this.setState({
                loading: true
                });
                console.log(error)
            }
        )
    }

    logAnswer = () => {
        console.log("Log")
        console.log("Index " + this.state.currentQuestionIndex)
        const answer = 
            {
                question_id: this.state.currentQuestionIndex,
                answer: this.state.myAnswer
            }

        this.setState(prevState => ({
            answers: [...prevState.answers, answer]
        }), () => {
            console.log("Log setState ferdig, index: " + this.state.currentQuestionIndex)
        })
    }

    nextQuestionHandler = () => {
        /**
         * Først logg svar med spørsmålID,
         * Sett myAnswer til null og gjør knapp disabled
         */
        this.logAnswer()
        this.setState({myAnswer: null, disableButton: true})

        /**
         * Hvis tomt for spørsmål, avslutt og vis resultat
         */
        if (!this.state.quizDataset[this.state.currentQuestionIndex+1]) {
            /**
             * Øk index for array
             */
            this.setState({
                currentQuestionIndex: this.state.currentQuestionIndex+1
            }, () => {
                console.log("Setstate")
                this.logAnswer()
                this.props.setDone(true)
                this.props.fetchResults(this.state.answers)
            } );
            console.log("Ferdig")
        }

        /**
         * Øk index for array
         */
        this.setState({
            currentQuestionIndex: this.state.currentQuestionIndex+1
        });
    }

    /**
     * Setter nåværende selektert svar 
     * og gjør at man kan trykke på neste spm. knapp
     * @param {Int} answer valgt svar til spørsmål
     */
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
            disableButton,
            quizDataset,
            loading} 
        = this.state;

        if (!loading && quizDataset[currentQuestionIndex]) {
            return (
            <div className="quiz-container">
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
        } else {
            return (
                <div className="quiz-container" style={{padding: "100px 0"}}>
                    <Loader type="Oval" color="#2a9d8f" loading={loading}/>
                </div>
            )
        }
        
    }
}
