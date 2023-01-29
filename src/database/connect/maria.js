const maria = require('mysql');

const connection = maria.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'hojoon',
    password: 'hojoon',
    database: 'javaBoard'
});

module.exports = connection;