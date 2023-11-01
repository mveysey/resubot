const express = require('express');
const app = express();
const routes = require('./Database'); // Import your routes

app.use('/', routes); // Use the routes

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
