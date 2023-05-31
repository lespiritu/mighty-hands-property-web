const Property = require('../Models/propertySchema')

async function viewSingleProperty(request, response) {
    const viewSingleProperty = await Property.findById(request.params.propertyId)

    try {
        if (viewSingleProperty !== null && viewSingleProperty.isAvailable === true) {
            response.send({
                "status":"success",
                viewSingleProperty
            })
        }
        else {
             response.send({
            "status": "failed",
            "message":"Doesn't have data from id or property id is incorect!",
        })
        }
    }
    
    catch (error) {
        response.send({
            "status": "failed",
            "message": "Doesn't have data from id or property id is incorect!",
            error
        })
    }
}

module.exports = {viewSingleProperty}