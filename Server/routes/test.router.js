const express = require("express");
const router = express.Router();

//http://localhost:4000/api/test/hello
const testController = require("../controller/test.controller");

router.get("/hello", testController.test1);

module.exports = router;
