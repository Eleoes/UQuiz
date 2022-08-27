import React from 'react'
import { Link } from 'react-router-dom';

import "./Home.css";

const Home = () => {
  return (
    <div className='home-page-container'>
      <h1 className='home-title'>
        <Link to="/create+quiz">Start</Link>
      </h1>

      <p className='description'>Do UQuiz</p>
    </div>
  )
}

export default Home;