module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const vendorController = require("../controllers/vendorController.js");

router
  .route("/")
  .post(vendorController.create);



	return router;
};

