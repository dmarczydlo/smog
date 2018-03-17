const request = require('request');
const Station = require('../models').Station;
const Sensor = require('../models').Sensor;

const PATH_SENSORS = 'http://api.gios.gov.pl/pjp-api/rest/station/sensors/';


module.exports.insertStations = async (stations) => {
    return await Promise.all(stations.map(async (station) => {

        const row = await Station.findOne({where: {internalStationId: station.id}});

        if (row === null) {
            await Station.create({
                stationName: station.stationName,
                gegrLat: station.gegrLat,
                gegrLon: station.gegrLon,
                street: station.addressStreet,
                city: station.city.name,
                internalStationId: station.id
            });
        }
    }));
};

module.exports.saveSensorsToStation = async (station) => {
    request.get({
        url: `${PATH_SENSORS}${station.id}`,
    }, async (error, response, body) => {

        const sensors = JSON.parse(body);

        await Promise.all(sensors.map(async (sensor) => {
            const row = await Sensor.findOne({where: {sensorId: sensor.id}});
            if (row === null) {
                await Sensor.create({
                    paramName: sensor.param.paramName,
                    paramCode: sensor.param.paramCode,
                    sensorId: sensor.id,
                    stationId: station.id
                });
            }
        }));

    });
};
