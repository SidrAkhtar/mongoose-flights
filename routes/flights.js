var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// All routes "start with" /flights (from server.js)

// GET /movies/new (new functionality)
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
// Post /flights (create functionality)
router.post('/', flightsCtrl.create)
router.get('/:id', flightsCtrl.show)

module.exports = router;
