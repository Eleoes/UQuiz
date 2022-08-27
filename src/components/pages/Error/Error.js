import React from 'react'
import { Link } from 'react-router-dom';

import "./Error.css";

const Error = () => {
  return (
    <div className='error-container'>
      <h1 className='error-title'>Page Not Found</h1>
      <h3 className='error-title'>Please report this to: pending@email.com</h3>

      <Link to='/' className='return-home'>Return Home</Link>
    </div>
  )
}

export default Error;