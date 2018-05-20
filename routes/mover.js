module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
  const moverController = require("../controllers/moverController.js");
  	const vendorController = require("../controllers/vendorController.js");


router
  .route("/submitorder")
	.post(moverController.create)

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

