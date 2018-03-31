module.exports = function(sequelize, DataTypes) {
  var vendor = sequelize.define("vendor", {
    input_user_id: {
      type: DataTypes.INTEGER,
      allownull: false,
      validate: {
        len: [1]
      }
    },
    input_address: {
      type: DataTypes.TEXT,
      allownull: false,
      validate: {
        len: [1]
      }
    },
    input_phoneNumber: {
      type: DataTypes.TEXT,
      allownull: false,
      validate: {
        len: [1]
      }
    },
    input_notes: {
      type: DataTypes.TEXT,
      allownull: false,
      validate: {
        len: [1]
      }
    }
  });

  return vendor;
// module.exports = Vendor_Record;
};
