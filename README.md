# practice_express-api

## Goal
Build a small Express.js web API to store and serve different quotes about computers, coding, and technology.

## Installation
This project asumes that you have Node.js installed.
 1. Check that you have Node.js installed by running the commands `node -v` or `which node`
 2. Clone this project or import it's raw contents into local files
 3. Install Express.js by running the command `npm install express --save`

## Execute
To execute the project, simply start __server.js__ file.
 1. Navigate to the project's folder by running the command `cd <dir_path>`
 2. Run `node server.js`

## Description
This small practice API is developed using Node.js and Express.js and consists of the following endpoints:

### Get Quotes
 - Request: GET 'https://localhost:4001/api/quotes'
 - Response: `{ quotes: <quotes_array> }`
 - __Optional__ query parameter: `person` (string) - If a `person` query parameter is provided it will return all quotes matching that person, or an empty array if not matches are found

### Get Random Quote
 - Request: GET 'https://localhost:4001/api/quotes/random'
 - Response: `{ quote: <random_quote> }`

### Post New Quote
 - Request: POST 'https://localhost:4001/api/quotes'
 - Response: `{ quote: <new_quote> }`
 - __Mandatory__ query parameters: `quote` (string) - String containing the quote that you want to add. `person` (string) - String containing the name of the author
