require("dotenv").config();

const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const DATABASE_URL = process.env.DB_URI;


const connectDb = () =>
{
    console.log(DATABASE_URL)
    return mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useNewUrlParser:true},err =>{
        console.log(err);
        if(err)
        {
console.log("failed");
        }else
        {
            console.log("success");
        }
    });
}

const db = mongoose.connection;

db.on("error",console.error.bind(console,"monngoDB connection error"));

module.exports = connectDb;