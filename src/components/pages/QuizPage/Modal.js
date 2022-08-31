import React from 'react'

import "./Modal.css";

const Modal = ({closeModal}) => {

  return (
    <div className='modal-bg'>
        <div className='modal-container'>
            <div className='modal-titleCloseBtn'>
                <button onClick={() => closeModal(false)}>X</button>
            </div>
            <div className='modal-title'>
                <h1>Question name</h1>
            </div>
            <div className='modal-body'>
                <p>Keep going!</p>
            </div>
            <div className='modal-footer'>
                <button onClick={() => closeModal(false)}>Cancel</button>
                <button>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Modal;