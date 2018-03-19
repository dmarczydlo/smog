'use strict';
module.exports = (sequelize, DataTypes) => {
  var Data = sequelize.define('Data', {
    key: DataTypes.STRING,
    date: DataTypes.DATE,
    value: DataTypes.DECIMAL
  }, {});
  Data.associate = function(models) {
      Data.belongsTo(models.Sensor, {foreignKey: 'sensorId'});
  };
  return Data;
};
