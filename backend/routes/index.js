const express = require('express');
const { fetchCityServices, fetchCityServicesTypes } = require('../controller/cityServices.controller');
const router = express.Router();

router.get('/services', fetchCityServices);
router.get('/services-types', fetchCityServicesTypes);

module.exports = router;
