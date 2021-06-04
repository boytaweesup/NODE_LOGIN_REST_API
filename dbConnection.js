const mysql = require('mysql2');
const db_connection = mysql
    .createConnection ({
        host: "localhost",
        user: "root",
        password: "12345678",
        database: "node_auth_api"
})
    .on ("error", (err) => {
        console.log("Failed to connect to Database - ", err);
    });

module.exports = db_connection ;
