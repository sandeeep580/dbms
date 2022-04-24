const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "test1234",
    database : "railway_reservation",
    multipleStatements : true,
    insecureAuth : true
});

mysqlConnection.connect(err => {
    if(!err){
       console.log("Connected");
    }else{
        console.log(err);
        console.log("Connection failed");
    }
});

module.exports = mysqlConnection;