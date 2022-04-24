 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');

 const passengerRoutes = require('./routes/passenger');
 const userRoutes = require('./routes/user');
 const trainsRoutes = require('./routes/trains');
 const mysqlConnection = require('./connection');

 var app = express();
 app.use(cors());
 app.use(bodyParser.json());

 app.use("/user", userRoutes);
 app.use("/trains",trainsRoutes);

 app.listen(5000);