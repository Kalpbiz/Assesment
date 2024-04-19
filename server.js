// Import necessary libraries and utilities
const express = require('express');
const fetch = require('node-fetch');
const { extractFirstLink, isPhilosophyPage } = require('./utils');

const app = express();

app.use(express.json());
// Define endpoint to handle Wikipedia URL requests
app.get('/api/wikipedia', async (req, res) => {
  const { url } = req.query; 
  const visitedPages = []; // Initialize array to store visited Wikipedia pages
  let requests = 0;
  let currentPage = url;

  try {
        // Continue fetching pages until the Philosophy page is reached
    while (!isPhilosophyPage(currentPage)) {
      const response = await fetch(currentPage);
      const html = await response.text();
      visitedPages.push(currentPage); // Extract the first link from the current page
      currentPage = extractFirstLink(html);
      requests++;
    }
        // Respond with JSON containing the number of requests and visited pages
    res.json({ requests, visitedPages });
  } catch (error) {
    console.error('Error fetching Wikipedia data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
