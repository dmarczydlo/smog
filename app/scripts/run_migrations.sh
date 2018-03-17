#!/bin/bashclear
echo "Running migrations"
cd ..
./node_modules/.bin/sequelize db:migrate

