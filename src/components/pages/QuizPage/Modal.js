import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Modal.css";

const Modal = ({ id, deleteQuiz, closeModal, quizData, score, setScore }) => {

    const [showResults, setShowResults] = useState(false);

    const handleSubmit = () => {
        let tempScore = 0;
        quizData.questions.forEach((question) => {
            tempScore += question.userAnswer === Number(question.correctAnswer) ? 1 : 0;
        });
        setScore(tempScore);
        setShowResults(true);
    }

    const handleDelete = () => {
        closeModal(false);
        deleteQuiz(id);
    }

  return (
    <div className='modal-bg' id={id}>
        <div className='modal-container'>
            <div className='modal-titleCloseBtn'>
                <button onClick={() => closeModal(false)}>X</button>
            </div>
            <div className='modal-title'>
                <h1>{quizData.name}</h1>
            </div>
            {showResults ? <><div className='modal-body-column'>
                    <h1 className='title'>Score: {score < 10 ? `0${score}` : score}</h1>
                    <div className='modal-footer'>
                        <Link to ='/quiz+page' className='quiz-page'>
                            <button onClick ={() => closeModal(false)}>Quiz Page</button>
                        </Link>
                        <Link to ='/' className='home'>
                            <button>Home</button>
                        </Link>
                    </div>
                </div>
                </> : <>
                <div className='modal-body'>
                        {quizData.questions.map((item, index) => (
                            <div className='question-container' key={index}>
                                <h3 className='question'>
                                    {index + 1}. {item.question}
                                </h3>
                            
                                <ul className='options-container'>
                                    {item.options.map((option, i) => (
                                        <li key={i} className='option'>
                                            <input
                                                type='radio'
                                                name={item.question + index}
                                                id={option + i + index}
                                                onClick={() => {
                                                    item.userAnswer = i + 1;
                                                }}
                                            />{" "}
                                            <label htmlFor={option + i + index}>{option}</label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                
                 </div>
                <div className='modal-footer'>
                    <button onClick={() => closeModal(false)}>Cancel</button>
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={handleDelete}>Delete Quiz</button>
                </div>
            </>}
        </div>
    </div>
  )
}

export default Modal;