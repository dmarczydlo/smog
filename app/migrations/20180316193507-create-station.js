'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Stations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            stationName: {
                type: Sequelize.STRING
            },
            gegrLat: {
                type: Sequelize.STRING
            },
            gegrLon: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            street: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Stations');
    }
};
