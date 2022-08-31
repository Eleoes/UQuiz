import React from 'react'

import "./Modal.css";

const Modal = ({ closeModal, quizData }) => {
  return (
    <div className='modal-bg'>
        <div className='modal-container'>
            <div className='modal-titleCloseBtn'>
                <button onClick={() => closeModal(false)}>X</button>
            </div>
            <div className='modal-title'>
                <h1>{quizData.name}</h1>
            </div>
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
                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Modal;