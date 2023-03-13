# Express-Link

## Overview

`Express-Link` is a Node.js web application that allows users to shorten long URLs into short, easy-to-remember URLs. The application uses `Express`, `valid-url`, `shortid`, and `Mongoose` to create a URL shortening service.

## Installation

To use `Express-Link` in your Node.js project, you'll need to install the following packages using npm:

```
npm install express mongoose ejs valid-url shortid
```

Once you've installed these packages, you can download the code and run `npm run dev ` to start the server.

## Usage

To use `Express-Link`, you can visit the home page at `http://localhost:5000/` and enter a long URL to shorten. The application will generate a unique short URL and save the long URL and short URL to the database. You can then use the short URL to access the long URL.
