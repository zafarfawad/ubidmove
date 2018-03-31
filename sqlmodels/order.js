module.exports = function(sequelize, DataTypes) {
  var order = sequelize.define("order", {
    input_order_id: {
      type: DataTypes.INTEGER,
      allownull: false,
      validate: {
        len: [1]
      }
    },
    input_vendor_name: {
      type: DataTypes.TEXT,
      allownull: false,
      validate: {
        len: [1]
      }
    },
    input_user_name: {
      type: DataTypes.TEXT,
      allownull: false,
      validate: {
        len: [1]
      }
    },
    input_order_date: {
      type: DataTypes.TEXT,
      allownull: false,
      validate: {
        len: [1]
      }
    },
    input_order_completed: {
      type: DataTypes.TEXT,
      allownull: false,
      validate: {
        len: [1]
      }
    },
    input_comments: {
      type: DataTypes.TEXT,
      allownull: false,
      validate: {
        len: [1]
      }
    }
  });


  return order;
  // module.exports = Order_Record;

};
