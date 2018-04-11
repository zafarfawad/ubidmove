module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const vendorController = require("../controllers/vendorController.js");

router
  .route("/mover/signup")
	.post(vendorController.create)

router
.route("/")
	.get(vendorController.findAll)
	.put(vendorController.update)
	.delete(vendorController.remove)
	.get(vendorController.findById)


	return router;
};

