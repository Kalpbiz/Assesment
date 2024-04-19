import React, { useState } from 'react'; //Importing React library and useState hook for managing state
import './App.css'; // Import CSS styles for the component

function Kalptomato() { // Define the main functional component named Kalp
  const [url, setUrl] = useState('');
  const [requests, setRequests] = useState(0);
  const [visitedPages, setVisitedPages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`/api/wikipedia?url=${url}`); //// Send a GET request to the backend API with the provided Wikipedia URL
      const data = await response.json();
      setRequests(data.requests); // Update 'requests' state with the number of requests required to reach the "Philosophy" page
      setVisitedPages(data.visitedPages); // Update 'visitedPages' state with the list of visited Wikipedia pages
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Wikipedia Loop Challenge</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Wikipedia URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit" disabled={isLoading}>{isLoading ? 'Loading...' : 'Submit'}</button>
        </form>
      </div>
      <div className="result-container">
        {requests > 0 && ( // Display the number of requests required to reach the "Philosophy" page
          <div className="result">
            <p>Requests required: {requests}</p>
          </div>
        )}
        {visitedPages.length > 0 && ( // Conditional rendering to display visited pages if there are visited pages
          <div className="visited-pages">
            <p>Visited pages:</p>
            <ul>
              {visitedPages.map((page, index) => (
                <li key={index}>{page}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Kalptomato; // Export the App component as default