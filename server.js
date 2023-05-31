const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./config/dbConnect')

const dotenv = require('dotenv')

dotenv.config();

const port = process.env.PORT || 5000
const app = express();

// This function is the connection to the database
connectDB()
// This function is the connection to the database


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());




// listen app
app.listen(port, ()=> console.log(`Server is running at server: ${port}`))