const mongoose = require('mongoose')

async function connectDB(){
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`We're connected to the database!`);
    }

    catch (error) {
        console.log(`Error: ${error.message} `)
        process.exit()
    }
}

module.exports = connectDB