import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Import the tomato component instead of App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
