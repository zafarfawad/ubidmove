module.exports = function (sequelize, DataTypes) {
  var vendor = sequelize.define("vendor", {
    mongoUserID: {
      type: DataTypes.TEXT,
      allownull: true,
      validate: {
        len: [1]
      }
    },

    username: {
      type: DataTypes.TEXT,
      allownull: true,
      validate: {
        len: [1]
      }
    },
    companyName: {
      type: DataTypes.TEXT,
      allownull: true,
      validate: {
        len: [1]
      }
    },
    companyAddress: {
      type: DataTypes.TEXT,
      allownull: true,
      validate: {
        len: [1]
      }
    },
    phoneNumber: {
      type: DataTypes.TEXT,
      allownull: true,
      validate: {
        len: [1]
      }
    },
    zipcode: {
      type: DataTypes.TEXT,
      allownull: true,
      validate: {
        len: [1]
      }
    },
    services: {
      type: DataTypes.TEXT,
      allownull: true,
      validate: {
        len: [1]
      }
    }
  });

  return vendor;
  // module.exports = Vendor_Record;
};
