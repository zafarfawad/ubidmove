const db = require("../sqlmodels");

module.exports = {
    create: function(req,res){

db.vendor
  .create({
    input_user: req.body.input_user,
    input_address: req.body.input_address,
    input_phonenumber: input_phonenumber,
    input_user_id: req.user.id
  })
  .then(dbvendor => res.json(dbvendor))
  .catch(err => res.status(422).json(err));

    }
}