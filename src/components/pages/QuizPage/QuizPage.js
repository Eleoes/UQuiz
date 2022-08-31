import React, { useState } from 'react';
import Modal from './Modal';

import "./QuizPage.css";

const QuizPage = (props) => {
  props.questions.forEach((question) => (question.userAnswer = 0));

  const [openModal, setOpenModal] = useState(false);
  
  const loaded = () => {
    return props.quizzes.map((quiz) => (
      <div key={quiz._id} className="quiz-container">
            <h1 className='title' onClick={() => {
              setOpenModal(true)
              }}>
                {quiz.name}
            </h1>
          {openModal && <Modal quizData={quiz} closeModal={setOpenModal}/>}
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>
  }
  
  return (
    <main className='container'>
      {props.quizzes ? loaded() : loading()}
    </main>
    
  );
};

export default QuizPage;