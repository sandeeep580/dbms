const express = require('express');
const Router = express.Router();
const mysqlConnection = require('../connection');

// Select * from train;

Router.post("/register", (req, res) => {
    const {user_name, user_password, email_id, phone_num} = req.body;
    console.log("here");
    mysqlConnection.query(
        `insert into user (user_name, user_password, email_id, phone_num) values ("${user_name}", "${user_password}", "${email_id}", "${phone_num}")`
        ,(err, rows, fields) => {
        if(!err){
            res.status(200).json({success : true, rows});
        }else{
            console.log(err);
        }
    })
});

// Select * from users where email_id = inptu and password
Router.post("/login", (req, res) => {
    console.log("here 2");
    const {email_id,user_password} = req.body;
    console.log(req.body);
    mysqlConnection.query(`Select * from user where (email_id = "${email_id}" and user_password = "${user_password}")`,(err, rows, fields) => {
        if(!err){
            console.log("rows => ", rows);
            res.status(200).json({success : true, rows});
        }else{
            console.log(err);
        }
    })
});

Router.post("/booking", (req, res) => {
    console.log("booking");
    const {email_id, train_num} = req.body;
    mysqlConnection.query(`insert into passenger (email_id, train_num) values ("${email_id}", "${train_num}")`,(err, rows, fields) => {
        if(!err){
            console.log("rows => ", rows);
            res.status(200).json({success : true, rows});
        }else{
            console.log(err);
        }
    })
})

module.exports = Router;