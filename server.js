const express = require('express')
const cors = require('cors')
const connectDB = require('./config/dbConnect')

const dotenv = require('dotenv')

dotenv.config();
const app = express();


const port = process.env.PORT || 5000

// This function is the connection to the database
connectDB()
// This function is the connection to the database



// imported routes
const propertyRoutes = require('./Routes/propertyRoutes.js')


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


// home page
// app.use('/', (request, response) => {
//     response.send('API is running...')
// })


// all routes
app.use('/api/property', propertyRoutes)



// listen app
app.listen(port, ()=> console.log(`Server is running at server: ${port}`))