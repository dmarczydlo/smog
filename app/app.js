const express = require('express')
const app = express()
const request = require('request');
const PATH = 'http://api.gios.gov.pl/pjp-api/rest/station/findAll';
const stationsHelper = require('./utils/stations');
app.get('/', async (req, res) => {

    request.get({
        url: PATH,
    }, async (error, response, body) => {

        const stations = JSON.parse(body);
        await stationsHelper.insertStations(stations);
        await Promise.all(stations.map(async (station) => {
                await stationsHelper.saveSensorsToStation(station);
            }
        ));

    });
    res.status(200).json({
        success: true
    });
});

app.listen(3333, () => console.log('App listening on port 3333!'))
