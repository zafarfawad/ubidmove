module.exports = function(sequelize, DataTypes) {
  var mover = sequelize.define("mover", {
    userMoveFromAddress: {
      type: DataTypes.TEXT,
      allownull: false,
      validate: {
        len: [1]
      }
    },
    userMoveToAddress: {
      type: DataTypes.TEXT,
      allownull: false,
      validate: {
        len: [1]
      }
    },
    userMoveDate: {
      type: DataTypes.TEXT,
      allownull: false,
      validate: {
        len: [1]
      }
    },
    userMoveTime: {
      type: DataTypes.TEXT,
      allownull: false,
      validate: {
        len: [1]
      }
    },
    userMoveSize: {
      type: DataTypes.TEXT,
      allownull: false,
      validate: {
        len: [1]
      }
    },
    userMoveItem: {
      type: DataTypes.TEXT,
      allownull: false,
      get: function() {
        return this.getDataValue("userMoveItem").split(";");
      },
      set: function(val) {
        this.setDataValue("userMoveItem", val.join(","));
      }
    }
  });

  return mover;
// module.exports = User_Record;

};
