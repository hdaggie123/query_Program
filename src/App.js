//import logo from './logo.svg';
import { on } from 'events';
import React, {useState} from 'react';
import './App.css';


function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve form data
    setQuery(event.target.query.value);

    // Display results in a window below
    const resultWindow = document.getElementById('result');
    resultWindow.innerHTML = 'Question: ' + query;

    // Send data to the backend
    // Code to send the name and email values to the backend...
  };
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <>
     <div className="App">
        <form id="query" onSubmit={handleSubmit}>
          <label htmlFor="query">What is your Question?</label>
          <input type="text" id="query" name="query" />
          <button type="submit">Submit here!</button>
          <button type="reset">Reset here!</button>
        </form>
      </div>
      <div id="result">
        <p>Here is the answer to your question</p>
      </div>
    </>
  );
}

export default App;
