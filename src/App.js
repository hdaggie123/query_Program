//import logo from './logo.svg';
import { on } from 'events';
import axios from 'axios';
import React, {useState} from 'react';
import './App.css';


function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission

    // Retrieve form data
    const searchQuery = event.target.query.value;

    try {
      setLoading(true);
      // Make an HTTP GET request to the Google Custom Search JSON API
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyASsZhFnPSGdCL4ia20M4FeZWfopbu8gH0&cx=b70849ddcb9c445be&q=${encodeURIComponent(
          searchQuery.trim()
        )}`
      );

      // Extract search results from the API response
      const searchResults = response.data.items;

      // Update the state with the search results
      setResult(searchResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setResult(["Error fetching search results!"]);
    }finally{ 
      //Removes Loading message
      setLoading(false);
    }
  };
  const handleReset = () => {
    // Reset the form
    setQuery('');
    setResult([]);
  };
  
  return (
    <>
    <div className='App'>
    <div>
        <form id="query" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="query" >Riddle me not! Only answers here!</label>
            <input type="text" className="form-control" id="query" name="query" placeholder="What is your questions?"/>
          </div>
          <button type="submit" className="btn btn-primary">Submit here!</button>
          <button type="reset" className="btn btn-secondary" onClick={handleReset}>Reset here!</button>
        </form>
      </div>
    <div id="result" className='ResultDisplay'>
    {loading && <p>Loading results...</p>}
      {result.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <a href={item.link}>{item.link}</a>
          <p>{item.snippet}</p>
        </div>
      ))}
    </div>
    <img src={process.env.PUBLIC_URL + '/Riddler.png'} alt="Riddler Picture" />
    </div>
  </>
  );
}

export default App;
