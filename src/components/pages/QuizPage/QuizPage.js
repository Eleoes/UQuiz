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
    
  );
};

export default QuizPage;