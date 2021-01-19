const mysql = require('mysql2/promise')

// sem connection pool

/*
module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'cat-products'
})
*/

// com connection pool
module.exports = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'cat-products',
    waitForConnections: true,
    connectionLimit: 20,
    queueLimit: 0
})