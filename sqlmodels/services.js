module.exports = function(sequelize, DataTypes) {
  var Services = sequelize.define("Services", {

    serviceType: {
      type: DataTypes.TEXT,
      allownull: false,
      validate: {
        len: [1]
      }
    }
  });

  Services.associate = function(sqlmodels){
    Services.belongsTo(sqlmodels.Vendor, {
      foreignKey: {
        allownull:false
      }
    });
  };

  return Services;
};
