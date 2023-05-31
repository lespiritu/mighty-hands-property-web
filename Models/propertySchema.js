const mongoose = require('mongoose')

const propertySchema = new mongoose.Schema(
    {
        propertyName: {
            type: String,
            required: [true, 'Property Name is required!']
        },

        developer: {
            type: String
        },
        address: {
            type: String,
            required:[ true, 'address is required!']
        },

        details: [],
        
        descriptions: {
            type:String
        },

        isAvailable: {
            type:Boolean,
            default:true
        },

        images: [],
        
        price: {
            type: Number,
            required:[true, 'price is required!']
        },
        sizeNumber: {
            type: String
        },

        category: {
            type: String,
            enum: ['large','medium', 'small', 'house and lot', 'others']
        }
    }
)



module.exports = mongoose.model("Property", propertySchema)