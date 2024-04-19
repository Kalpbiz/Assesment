# Wikipedia Philosophy Challenge

The Wikipedia Philosophy Challenge is a web application/API that determines the number of requests it takes to reach the "Philosophy" page from a given Wikipedia URL while displaying the path of visited pages along the way. It follows the Wikipedia Loop rules by navigating through the first link in the main body text of each Wikipedia page.

## Features

- Calculates the number of requests required to reach the "Philosophy" page.
- Maintains a record of visited Wikipedia pages in chronological order.
- Handles edge cases gracefully, such as dead-end pages or pages without valid links.
- Provides a user-friendly interface for inputting Wikipedia URLs and viewing results.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **HTTP Requests:** Fetch API, node-fetch
- **HTML Parsing:** Cheerio
- **Other:** npm, CSS

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Kalpbiz/Assesment
Navigate to the project directory:
bash
Copy code
cd wikipedia-loop-challenge
Install dependencies:
bash
Copy code
npm install
Usage
Start the server:
bash
Copy code
npm start
Open your web browser and go to http://localhost:3000 to access the web application.
Enter a Wikipedia URL and submit the form to see the results.
API Endpoint
GET /api/wikipedia?url= - Fetches the number of requests required to reach the "Philosophy" page from the provided Wikipedia URL and the list of visited pages.
Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/my-feature).
Make your changes.
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/my-feature).
Create a new pull request.
License
This project is licensed under the MIT License.
