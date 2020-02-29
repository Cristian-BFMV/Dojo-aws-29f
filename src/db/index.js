const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '54.86.29.87',
    user: 'user_dojo',
    password: 'awsdojo',
    database: 'dojo_aws_lambdas'
})

module.exports = pool;