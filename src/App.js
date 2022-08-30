import React, { useState, useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/pages/Home/Home";
import CreateQuiz from "./components/pages/CreateQuiz/CreateQuiz";
import QuizPage from "./components/pages/QuizPage/QuizPage";
import QuizResult from "./components/pages/QuizResult/QuizResult";
import Settings from "./components/pages/Settings/Settings";
import Error from "./components/pages/Error/Error";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [quizName, setQuizName] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [quizzes, setQuizzes] = useState(null);

  const API_URL = "http://localhost:4000/api/quizzes"; //matching server 

  const getQuizzes = async () => {
    try {
      const response = await fetch(API_URL); 
      const data = await response.json(); // returns a promise object
      setQuizzes(data);
    } catch (error){
      // TODO: add logic or task
    }
  }

  // create quiz
  const createQuiz = async () => {
    setQuizName("");
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-type' : 'Application/json'
        },
        body: JSON.stringify({
          name: quizName,
          questions: questions.map(({question, correctAnswer, options}) => ({
            question,
            correctAnswer,
            options}))
        })
      });
      setQuestions([])
      getQuizzes();
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getQuizzes();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className='settings'>
            <Header />

            <div className="page-container">
              <Outlet />
            </div>
          </div>
        }
      >
        <Route
          index
          element={
            <Home
            />
          }
        />

        <Route
          path="/create+quiz"
          element={
            <CreateQuiz
              questions={questions}
              setQuestions={setQuestions}
              quizName={quizName}
              setQuizName={setQuizName}
              setIsFormSubmitted={setIsFormSubmitted}
              createQuiz={createQuiz}
              isFormSubmitted={isFormSubmitted}
            />
          }
        />

        <Route
          path="/quiz+page"
          element={
            <QuizPage 
              quizzes={quizzes}
              quizName={quizName}
              questions={questions}
              setIsFormSubmitted={setIsFormSubmitted}
              setQuestions={setQuestions}
            />
          }
        />

        <Route
          path="/quiz+result"
          element={
              <QuizResult />
          }
        />

        <Route
          path="/settings"
          element={<Settings />}
        />

        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default App;