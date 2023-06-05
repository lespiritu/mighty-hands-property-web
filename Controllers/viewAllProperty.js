const Property = require('../Models/propertySchema')

async function viewAllProperty(request, response) {
    const data = await Property.find({})
    
    try {
        response.send({
            "status": "success",
            data
        })
    } catch (error) {
        response.send(error)
    }
}

module.exports = {viewAllProperty}