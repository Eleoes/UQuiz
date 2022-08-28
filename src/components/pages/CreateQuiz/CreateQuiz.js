import React from 'react';
import { useState, Link } from 'react';

import "./CreateQuiz.css";


const CreateQuiz = ({questions, setQuestions, quizName, setIsFormSubmitted}) => {

  //useState
  const [newForm, setNewForm] = useState({
    name:"",
    question: "",
    options: Array(3).fill(""),
    correctAnswer: "",
    userAnswer: null,
  })

  //handleChange
  const handleChange = () => {

  }

  //handleSubmit
  const handleSubmit = () => {
    // preventative conditionals
    if (
      newForm?.question &&
      newForm?.options[0] &&
      newForm?.options[1] &&
      newForm?.options[2] &&
      newForm?.correctAnswer > 0 &&
      newForm?.correctAnswer < 5
    ){
      setQuestions( questions.length ? [...questions, newForm ] : [newForm]);
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
      <h1 className='title'>Name your quiz and add your questions!</h1>
      <h2 className='questions-info'>
        Questions:{" "}
        {questions.length < 10 ? "0" + questions.length : questions.length}
      </h2>
      <form className='input-container'>

        { /* QUIZ NAME */ }
        <label name="QuizName" htmlFor='QuizName'>Quiz Name</label>
        <input
          type='text'
          value={newForm.name}
          onChange={handleChange}
        />

        { /* QUIZ QUESTION */ }
        <label name="Question" htmlFor='Question'>Question</label>
        <input
          type='text'
          value={newForm.question}
          onChange={handleChange}
        />

        { /* QUIZ ANSWERS */ }
        <label name='Option1' htmlFor='Option1'>Option 1:</label>
        <input 
        type='text'
        value={newForm.options[0]}
        onChange={handleChange}
        />
        <label name='Option2' htmlFor='Option2'>Option 2:</label>
        <input 
        type='text'
        value={newForm.options[1]}
        onChange={handleChange}
        />
        <label name='Option3' htmlFor='Option1'>Option 3:</label>
        <input 
        type='text'
        value={newForm.options[2]}
        onChange={handleChange}
        />

        { /* QUIZ CORRECT ANSWER */ }
        <label name='CorrectAnswer' htmlFor='correctAnswer'>Correct Answer is No.:</label>
        <input 
        type='text'
        value={newForm.correctAnswer}
        onChange={handleChange}
        />
      </form>

      <div className='proceed-buttons'>
        {questions.length !== 0 && quizName && (
          <Link
            to='/quiz+page'
            className='start-quiz'
            onClick={() => setIsFormSubmitted(true)}
            >
            <button>Start Quiz</button>
          </Link>
        )}
        <button className='add-question' onClick={handleSubmit}>Add Question</button>
      </div>
    </div>
  )
}

export default CreateQuiz;