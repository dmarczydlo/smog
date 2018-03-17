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
    street: DataTypes.STRING,
    internalStationId: DataTypes.INTEGER
  }, {});
  Station.associate = function(models) {
      Station.hasMany(models.Sensor, { foreignKey: 'stationId'} );
  };
  return Station;
};
