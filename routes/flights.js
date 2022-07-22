var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// All routes "start with" /flights (from server.js)

// GET /movies/new (new functionality)
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
// GET /flights (show functionality)
router.get('/:id', flightsCtrl.show)
// Post /flights (create functionality)
router.post('/', flightsCtrl.create)


module.exports = router;
