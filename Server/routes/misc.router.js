const express = require("express");
const router = express.Router();


const miscController = require("../controller/misc.controller");

router.get("/health", miscController.health);
router.get("/environment", miscController.environment);
router.get("/memory", miscController.memory);
router.get("/uptime", miscController.uptime);
router.get("/databaseInfo", miscController.databaseInfo);

module.exports = router;
