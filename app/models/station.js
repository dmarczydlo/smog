'use strict';
module.exports = (sequelize, DataTypes) => {
  var Station = sequelize.define('Station', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    stationName: DataTypes.STRING,
    gegrLat: DataTypes.STRING,
    gegrLon: DataTypes.STRING,
    city: DataTypes.STRING,
    street: DataTypes.STRING
  }, {});
  Station.associate = function(models) {
    // associations can be defined here
  };
  return Station;
};
