//import logo from './logo.svg';
import { on } from 'events';
import axios from 'axios';
import React, {useState} from 'react';
import './App.css';


function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve form data
    const searchQuery = event.target.query.value;

    try {
      // Make an HTTP GET request to the Google Custom Search JSON API
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyASsZhFnPSGdCL4ia20M4FeZWfopbu8gH0&cx=b70849ddcb9c445be&q=${encodeURIComponent(
          searchQuery
        )}`
      );

      // Extract search results from the API response
      const searchResults = response.data.items;

      // Update the state with the search results
      setResult(searchResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
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
      {result.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <a href={item.link}>{item.link}</a>
          <p>{item.snippet}</p>
        </div>
      ))}
    </div>
  </>
  );
}

export default App;
