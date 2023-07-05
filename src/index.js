import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Create function to render the page
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to the <code>Program</code> Query App
        </p>
      </header>
    </div>
  );
}

// Render the App component into the root element of the HTML
ReactDOM.render(<App />, document.getElementById('root'));
