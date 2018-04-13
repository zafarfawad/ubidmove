module.exports = function(sequelize, DataTypes) {
  var LookUp = sequelize.define("LookUp", {
    category: {
      type: DataTypes.TEXT,
      allownull: false,
      validate: {
        len: [1]
      }
    },
    value: {
      type: DataTypes.TEXT,
      allownull: false,
      validate: {
        len: [1]
      }
    }

  });

//   Services.associate = function(sqlmodels) {
//     Services.belongsTo(sqlmodels.Vendor, {
//       foreignKey: {
//         allownull: false
//       }
//     });
//   };

  return LookUp;
};
