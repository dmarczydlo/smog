const request = require('request');
const Station = require('../models').Station;
const Sensor = require('../models').Sensor;
const Data = require('../models').Data;

const PATH_SENSORS = 'http://api.gios.gov.pl/pjp-api/rest/station/sensors/';
const PATH_DATA = 'http://api.gios.gov.pl/pjp-api/rest/data/getData/';


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

saveData = async (sensor) => {
    request.get({
        url: `${PATH_DATA}${sensor.id}`,
    }, async (error, response, body) => {
        const data = JSON.parse(body);

        await Promise.all(data.values.map(async (element) => {
            const row = await Data.findOne({where: {sensorId: sensor.id, key: data.key, date: element.date, value: element.value}});
            if (element.value && element.value !== null) {
                if (row === null) {
                    console.log(element.value);
                    await Data.create({
                        key: data.key,
                        date: element.date,
                        value: element.value,
                        sensorId: sensor.id
                    });
                }
            }
        }));
    });
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
            await saveData(sensor);
        }));

    });
};
