const express = require('express')
const router = express.Router();
const {getFlight} = require('../controllers/flightController')


router.post('/price',getFlight)

module.exports = router