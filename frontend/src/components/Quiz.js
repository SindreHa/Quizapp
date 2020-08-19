import React, { Component } from "react";
import Question from "./Question";
import Options from "./Options";
import ProgressIndicator from "./ProgressIndicator";
import "../css/quiz.css";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";

export default class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questionIds: null,
      myAnswer: -1,
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
    const { currentQuestionIndex, quizDataset, myAnswer } = this.state;
    const options = quizDataset[currentQuestionIndex].options.split(", ");

    /**
     * Opprett answer objekt med spørsmål og svar data
     */
    const answer = {
      question: quizDataset[currentQuestionIndex].question,
      question_id: currentQuestionIndex + 1,
      answer: options[myAnswer],
      answer_id: myAnswer,
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
     * Sett myAnswer til -1 og gjør "Neste" knapp disabled
     */
    this.logAnswer();
    this.setState({ myAnswer: -1, disableButton: true });

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

// Typechecking proptypes
Quiz.propTypes = {
  gameDone: PropTypes.bool.isRequired,
  setDone: PropTypes.func.isRequired,
  fetchResults: PropTypes.func.isRequired,
};
