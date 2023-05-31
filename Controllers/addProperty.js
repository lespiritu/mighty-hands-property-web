const Property = require('../Models/propertySchema')

async function addProperty(request, response) {
    const input = request.body;
    const findProperty = await Property.findOne({ propertyName: input.propertyName }) 
    
    try {
        if (findProperty !== null ) {
             response.send({
                    "status" : "failed",
                    "message": "The product name is already exist in the database!"
                })
        }
        else {
            let newProperty = new Property(
                {
                    propertyName: input.propertyName,
                    developer: input.developer,
                    address: input.address,
                    descriptions: input.descriptions,
                    isAvailable: input.isAvailable,
                    price: input.price,
                    sizeNumber: input.sizeNumber,
                    category: input.category,
                    images: input.images,
                    details: input.details
                }
            )

            return newProperty.save()
                .then(data => response.send({
                    data,
                    "status": "success",
                    "message": "The proproperty is now added to the database!"
                }))

        }
    } catch (error) {
        response.send(error)
    }
}


module.exports = {addProperty}