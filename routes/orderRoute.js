const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const { order } = require('../controller/orderController')

//create order
router.post('/order',auth,order)

module.exports = router