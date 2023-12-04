const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5070;

// MySQL Database Configuration
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Resubot2024@",
  database: "resume",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error: " + err.stack);
    return;
  }
  console.log("Connected to the database");
});

app.use(cors());
app.use(express.json());

// Define your API routes here

// Create a router for your API
const router = express.Router();

// Define your API endpoint within the router
router.get("/api/data", (req, res) => {
  const query = "SELECT * FROM resume";
  db.query(query, (err, result) => {
    if (err) {
      res.status(500).send("Error fetching data");
      return;
    }
    res.json(result);
  });
});

// Use the router in your app
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app; // Export the Express app instance
