const express = require("express");
const router = express.Router();

//http://localhost:4000/api/test/hello
const templateController = require("../controller/template.controller");

router.get("/getAllTemplates", templateController.getAllTemplates);
router.post("/createTemplate", templateController.createTemplate);
router.get("/getTemplateById", templateController.getTemplateById);
router.post("/updateTemplateById", templateController.updateTemplateById);
router.post("/deleteTemplateById", templateController.deleteTemplateById);

module.exports = router;
