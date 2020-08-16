import React, { Component } from "react";
import Question from "./Question";
import Options from "./Options";
import ProgressIndicator from "./ProgressIndicator";
import "../css/quiz.css";
import Loader from "react-loader-spinner";

export default class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questionIds: null,
      myAnswer: null,
      currentQuestionIndex: 0,
      answers: [],
      disableButton: true,
      quizDataset: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.loadQuizData();
  }

  /**
   * Hent datasett for quiz
   */
  loadQuizData = () => {
    fetch("http://localhost:8080/quizDataset")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            quizDataset: result,
            loading: false,
          });
        },
        (error) => {
          this.setState({
            loading: true,
          });
          console.log(error);
        }
      );
  };

  logAnswer = () => {
    const answer = {
      question_id: this.state.currentQuestionIndex + 1,
      answer: this.state.myAnswer,
    };

    this.setState(
      (prevState) => ({
        answers: [...prevState.answers, answer],
      }),
      () => {
        /**
         * Hvis antall svar matcher antall spørsmål
         * Hent ut resultater fra database og setDone til true
         */
        if (this.state.answers.length === this.state.quizDataset.length) {
          this.props.fetchResults(this.state.answers);
          this.props.setDone(true);
        }
      }
    );
  };

  nextQuestionHandler = () => {
    /**
     * Først logg svar med spørsmålID,
     * Sett myAnswer til null og gjør knapp disabled
     */
    this.logAnswer();
    this.setState({ myAnswer: null, disableButton: true });

    /**
     * Hvis neste spørsmål eksisterer
     */
    if (this.state.quizDataset[this.state.currentQuestionIndex + 1]) {
      this.setState({
        currentQuestionIndex: this.state.currentQuestionIndex + 1,
      });
    }
  };

  /**
   * Setter nåværende selektert svar
   * og gjør at man kan trykke på neste spm. knapp
   * @param {Int} answer valgt svar til spørsmål
   */
  selectionHandler = (answer) => {
    this.setState({
      myAnswer: answer,
      disableButton: false,
    });
  };

  render() {
    const {
      currentQuestionIndex,
      myAnswer,
      disableButton,
      quizDataset,
      loading,
    } = this.state;

    if (loading) {
      return (
        <div className="quiz-container" style={{ padding: "100px 0" }}>
          <Loader type="Oval" color="#2a9d8f" loading={loading} />
        </div>
      );
    } else {
      return (
        <div className="quiz-container">
          <Question question={quizDataset[currentQuestionIndex].question} />
          <ProgressIndicator
            quizData={quizDataset}
            currentQuestionIndex={currentQuestionIndex}
          />
          <Options
            quizData={quizDataset[currentQuestionIndex]}
            myAnswer={myAnswer}
            currentQuestionIndex={currentQuestionIndex}
            handler={this.selectionHandler}
          />
          <button
            disabled={disableButton}
            onClick={() => this.nextQuestionHandler()}
          >
            {currentQuestionIndex < quizDataset.length - 1
              ? "Neste spørsmål"
              : "Se resultat"}
          </button>
        </div>
      );
    }
  }
}
