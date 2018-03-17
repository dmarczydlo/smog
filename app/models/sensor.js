'use strict';
module.exports = (sequelize, DataTypes) => {
    var Sensor = sequelize.define('Sensor', {
        paramName: DataTypes.STRING,
        paramCode: DataTypes.STRING,
        sensorId: DataTypes.INTEGER
    }, {});
    Sensor.associate = function (models) {
        Sensor.belongsTo(models.Station, {foreignKey: 'stationId'});
    };
    return Sensor;
};
