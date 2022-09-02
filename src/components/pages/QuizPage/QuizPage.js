import React, { useState, useEffect } from 'react';
import Modal from './Modal';

import "./QuizPage.css";

const QuizPage = (props) => {
  props.questions.forEach((question) => (question.userAnswer = 0));

  const [openModal, setOpenModal] = useState(false);
  const [score, setScore] = useState(0);
  const [id, setId] = useState(null);


  const handleOpen = (e,id) => {
    
    setOpenModal(true);
    setId(id);
  }

  useEffect(() => {
    if(openModal === true ) {
      let modals = document.getElementsByClassName('modal-bg');
      let modal = document.getElementById(id);
      if(modals.length > 0 && modal !== null) {
        for(let i=0; i < modals.length; i++){
          if( modal === modals[i]) {
            // modals[i].style.display='block';
            modals[i].style.className='modal-bg';
          }else{
            modals[i].style.display= 'none';
          }
        }
     }
    }
    
      
    
    
    // console.log(modals);
  }, [id, openModal]);

  const loaded = () => {
    return props.quizzes.map((quiz) => (
      <div key={quiz._id} className="quiz-container">
          <h1 className='title' onClick={(e) => {
            handleOpen(e,quiz._id)
            }}>
              {quiz.name}
          </h1>
          {
            openModal && 
            <Modal id={quiz._id} 
              quizData={quiz} 
              closeModal={setOpenModal} 
              score={score} 
              setScore={setScore}
              deleteQuiz={props.deleteQuiz}
            />
          }
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