const express = require("express")
const router = express.Router()

const authController = require("../controller/auth.controller")

router.post("/register", authController.register)
router.post("/login", authController.login)
router.get("/getAllUsers", authController.getAllUsers)
router.get("/getUserByUsername", authController.getUserByUsername)

module.exports = router