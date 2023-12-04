const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/api/customEndpoint", (req, res) => {
    // Example: Querying the database
    const query = "SELECT * FROM resume";

    db.query(query, (err, result) => {
      if (err) {
        res.status(500).send("Error fetching data from the database");
        return;
      }
      res.json(result);
    });
  });

  return router;
};
