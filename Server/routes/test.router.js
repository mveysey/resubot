const express = require("express")
const router = express.Router()

const testController = require("../controller/test.controller")

router.post("/api/test", testController.test1)

module.exports = router