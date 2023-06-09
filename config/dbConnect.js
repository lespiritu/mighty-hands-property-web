const mongoose = require('mongoose')

async function connectDB(){
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB Connected: ${connection.connection.host}`);
    }

    catch (error) {
        console.log(`Error: ${error.message} `)
        process.exit(1)
    }
}

module.exports = connectDB