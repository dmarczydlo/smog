'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Sensors', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            paramName: {
                type: Sequelize.STRING
            },
            paramCode: {
                type: Sequelize.STRING
            },
            sensorId: {
                type: Sequelize.INTEGER
            },
            stationId: {
                type: Sequelize.INTEGER,
                foreignKey: true,
                allowNull: false
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
        return queryInterface.dropTable('Sensors');
    }
};
