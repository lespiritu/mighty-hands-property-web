const express = require('express')
const router = express.Router()


// from controller
const {addProperty} = require('../Controllers/addProperty.js')
const {viewAllProperty } = require('../Controllers/viewAllProperty.js')
const {viewSingleProperty}= require('../Controllers/viewSingleProperty.js')

// all request routes
router.post('/addProperty', addProperty)
router.get('/viewAllProperty', viewAllProperty)
router.get('/viewSingleProperty/:propertyId', viewSingleProperty)

module.exports = router