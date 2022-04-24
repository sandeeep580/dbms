const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../connection');

// Select * from train;

Router.get("/", (req, res) => {
    console.log("here");
    mysqlConnection.query("Select * from train",(err, rows, fields) => {
        if(!err){
            res.status(200).json({success : true, rows});
        }else{
            console.log(err);
        }
    })
});

module.exports = Router;