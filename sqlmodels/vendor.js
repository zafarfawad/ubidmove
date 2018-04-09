module.exports = function (sequelize, DataTypes) {
  var Vendor = sequelize.define("Vendor", {
    
    mongoUserID: {
      type: DataTypes.UUID,
      // primaryKey: true,
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
    }
  });
  
    Vendor.associate = function(sqlmodels) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    
    Vendor.hasMany(sqlmodels.Services, { 
      // foreignKey: "mongoUserID" 
         onDelete: "cascade"

    });
    // Author.hasMany(models.Post, {
    // });
  };

  return Vendor;
};
