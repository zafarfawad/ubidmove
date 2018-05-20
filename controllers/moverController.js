const db = require("../sqlmodels");
const User = require("../models").User;
const router = require('express').Router();
// var passport = require("../config/passport.js");
var routerUser = require("../routes/authRoutes.js");

module.exports = {
  //create a new record for the vendors
  create: function(req, res) {
    console.log("sql", req.body);

    db.mover
      .create({
        // mongoUserID: req.body.authUserId,
        userMoveFromAddress: req.body.userMoveFromAddress,
        userMoveToAddress: req.body.userMoveToAddress,
        userMoveDate: req.body.userMoveDate,
        userMoveTime: req.body.userMoveTime,
        userMoveSize: req.body.userMoveSize,
        userMoveItem: req.body.userMoveItem
      })
      .then(dbmover => res.json(dbmover))
      .catch(err => res.status(422).json(err));
  },

  LookUpData: function(req,res){

    console.log(req.body)
      //  req.body.services.forEach(serviceType => {
      //   db.Services
      //   .create({
      //     serviceType: serviceType.name
      //   });
      // })
      
  },

  //find all the records
  findAll: function(req, res) {
    db.vendor
      .findAll({
        // where: {   input_user_id: req.user.id },
        limit: 5,
        order: [["createdAt", "DESC"]]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findZipcode: function(req, res) {
    db.LookUp
      .findAll({
        where: { "category":"zipcode" }
        // limit: 5,
        // order: [["createdAt", "DESC"]]
      })
      // .then(dbModel => res.json(dbModel))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findService: function(req, res) {
    db.LookUp
      .findAll({
        where: { category: "service" },
        order: [["ASC"]]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //find record by ID
  findById: function(req, res) {
    db.vendor
      .findAll({
        where: {
          input_user_id: req.user.id
        },
        limit: 5,
        order: [["createdAt", "DESC"]]
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //if the vendor decides to add additional phone number or zipcodes
  update: function(req, res) {
    db.vendor
      .update(
        {
          input_address: req.body.input_address,
          input_phoneNumber: req.body.input_phoneNumber,
          input_notes: req.body.input_notes
        },
        {
          where: {
            id: req.body.id
          }
        }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //delete a record
  remove: function(req, res) {
    db.vendor
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};