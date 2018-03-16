const express = require('express')
const app = express()
const request = require('request');
const PATH = 'http://api.gios.gov.pl/pjp-api/rest/station/findAll';
const db = require('./models');

app.get('/', (req, res) => {

    // request.get({
    //     url: PATH,
    // }, function (error, response, body) {
    //
    //     const stations = JSON.parse(body);
    //     stations.map((station) => {
    //        console.log(station);
    //     })
    //
    //     Station.create({
    //         stationName: 'test',
    //     })
    //         .then(newUser => {
    //             console.log(`New station ${newUser.stationName}, with id ${newUser.id} has been created.`);
    //         });
    //
    //
    // });

    db.sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });


    res.send('Hello World!');
});

app.listen(3333, () => console.log('App listening on port 3333!'))
