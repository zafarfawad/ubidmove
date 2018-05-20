module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const vendorController = require("../controllers/vendorController.js");

router
  .route("/signup")
	.post(vendorController.create)

router
  .route("/vendors/")
  .get(vendorController.findAll)
  .put(vendorController.update)
  .delete(vendorController.remove)
  .get(vendorController.findById)
  .get(vendorController.findService);

 router 
  .route("/vendors/service")

  .get(vendorController.findZipcode);
  


	return router;
};

