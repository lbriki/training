const api = require('./config/api')
const {
    APP_PORT
} = process.env

const databaseConnection = require('./config/database')
require('dotenv').config() 

databaseConnection()
    .then(() => {
        console.info('Successfully connected to database.')
        api.listen(APP_PORT, () => {
            console.log(`Listening on port ${APP_PORT}`);
        })
    })
    .catch(reason => {
        console.error('Could not connect to database.', reason)
    });