import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./CreateQuiz.css";


const CreateQuiz = ({questions, setQuestions, quizName, setQuizName, setIsFormSubmitted, createQuiz}) => {

  //useState
  const [newForm, setNewForm] = useState({
    name:"",
    questions: "",
    options: Array(3).fill(""),
    correctAnswer: "",
    userAnswer: null,
  })

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    createQuiz(newForm);
    setNewForm({
      name:"",
      question: "",
      options: Array(3).fill(""),
      correctAnswer: "",
      userAnswer: null,
    });

  }

  //add Question
  const addQuestion = () => {
    // preventative conditionals
    if (
      newForm?.question &&
      newForm?.options[0] &&
      newForm?.options[1] &&
      newForm?.options[2] &&
      newForm?.correctAnswer > 0 &&
      newForm?.correctAnswer < 4
    ){
      setQuestions( 
        questions.length ? [...questions, newForm ] : [newForm]
      );
      setNewForm({
        question:"",
        options: Array(3).fill(""),
        correctAnswer:"",
        userAnswer: null,
      });
    }else{
      alert("Please fill out all fields");
    }
    window.scrollTo(0,0);
  };

  return (
    <div className='container'>
      <h1 className='title'>Create your Quiz!</h1>
      <h2 className='questions-info'>
        Questions:{" "}
        {questions.length < 10 ? "0" + questions.length : questions.length}
      </h2>
      <form className='input-container'>

        { /* QUIZ NAME */ }
        <label name="QuizName" htmlFor='QuizName'>Quiz Name</label>
        <input
          type='text'
          value={quizName}
          onChange={(event) => setQuizName(event.target.value)}
        />

        { /* QUIZ QUESTION */ }
        <label name="Question" htmlFor='Question'>Question</label>
        <input
          type='text'
          value={newForm.question}
          onChange={(event) => 
            setNewForm({...newForm, question:event.target.value})
            }
        />

        { /* QUIZ ANSWERS */ }
        <label name='Option1' htmlFor='Option1'>Option 1:</label>
        <input 
        type='text'
        value={newForm.options[0]}
        onChange={(event) =>
          setNewForm({
            ...newForm,
            options: [
              event.target.value,
              newForm.options[1],
              newForm.options[2],
            ]
          })}
        />
        <label name='Option2' htmlFor='Option2'>Option 2:</label>
        <input 
        type='text'
        value={newForm.options[1]}
        onChange={(event) => 
          setNewForm({
            ...newForm,
            options: [
              newForm.options[0],
              event.target.value,
              newForm.options[2]
            ],
          })}
        />
        <label name='Option3' htmlFor='Option1'>Option 3:</label>
        <input 
        type='text'
        value={newForm.options[2]}
        onChange={(event) =>
          setNewForm({
            ...newForm,
            options: [
              newForm.options[0],
              newForm.options[1],
              event.target.value
            ],
          })}
        />

        { /* QUIZ CORRECT ANSWER */ }
        <label name='CorrectAnswer' htmlFor='correctAnswer'>Correct Answer is No. :</label>
        <input 
        type='text'
        value={newForm.correctAnswer}
        onChange={(event) =>
        setNewForm({
          ...newForm,
          correctAnswer: event.target.value,
        })}
        />

      </form>

      <div className="proceed-buttons">
        {questions.length !== 0 && quizName && (
          <Link
            to="/quiz+page"
            className="submit-quiz"
            onClick={handleSubmit}
          >
            <button>Submit Quiz</button>
          </Link>
        )}

        <button className="add-question" onClick={addQuestion}>
          Add Question
        </button>
      </div>
    </div>
  )
}

export default CreateQuiz;