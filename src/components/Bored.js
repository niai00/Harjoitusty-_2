import React, { useState } from 'react';
import axios from 'axios';
import './Bored.css';

export default function Bored() {

  const API_URL = "https://www.boredapi.com/api/activity/";
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [buttonClicked, setButtonClicked] = useState(false);

  const search = (e) => {
    e.preventDefault();
    setMessage('');
    setError(null);

    axios.get(API_URL)
      .then((response) => {
        setMessage(response.data.activity);
        setButtonClicked(true);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className='content'>
      <h3>Pick an activity for today...</h3>
      <button onClick={search}>Okay</button>
      {buttonClicked && <p id='message'>{message}</p>}
      {error && <div>Error: {error}</div>}
    </div>
  )
}