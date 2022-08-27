import React from "react";
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
          path="/add+questions"
          element={
            <CreateQuiz
            />
          }
        />

        <Route
          path="/quiz+page"
          element={
              <QuizPage />
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