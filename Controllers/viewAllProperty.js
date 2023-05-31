const Property = require('../Models/propertySchema')

async function viewAllProperty(request, response) {
    const viewProperties = await Property.find({})
    
    try {
        response.send({
            "status": "success",
            viewProperties
        })
    } catch (error) {
        response.send(error)
    }
}

module.exports = {viewAllProperty}