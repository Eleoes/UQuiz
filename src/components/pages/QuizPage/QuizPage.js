import React from 'react';
import { Link } from 'react-router-dom';

import "./QuizPage.css";

const QuizPage = (props) => {
  props.questions.forEach((question) => (question.userAnswer = 0));
  
  const loaded = () => {
    return props.quizzes.map((quiz) => (
      <div key={quiz._id} className="quiz-container">
        <Link to={`/quizzes/${quiz._id}`}>
          <h1>{quiz.name}</h1>
        </Link>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>
  }
  
  return (
    <main>
      {props.quizzes ? loaded() : loading()}
    </main>
    // <main className='container'>
    //   <h1 className='title'>{quizName}</h1>
    //   <div className='quizzes-container'>
    //     {quizzes.map((quiz, index) => (
    //       <div className='quiz-container' key={index}>
    //         <h3 className='question'>{index + 1}. {quiz.question}</h3>

    //         <ul className='options-container'>
    //           {quiz.options.map((option, i) => (
    //             <li key={i} className='option'>
    //               <input 
    //                 type='radio'
    //                 name={quiz.question + index}
    //                 id={option + i + index}
    //                 onClick={() => {
    //                   quiz.userAnswer = i+1;
    //                 }}
    //               />{" "}
    //               <label htmlFor={option + i + index}>{option}</label>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     ))}
    //   </div>
    //   <Link
    //     className='submit-answers'
    //     to='/quiz+result'
    //     onClick={() => {
    //       setIsFormSubmitted(true);
    //     }}
    //     >
    //       <button>Submit</button>
    //     </Link>
    // </main>
  );
};

export default QuizPage;