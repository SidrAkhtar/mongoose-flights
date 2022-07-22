const Flight = require('../models/flight');

module.exports = {
create,
};

function create(req, res) {
   // The new review will be embedded in the movie doc
   Flight.findById(req.params.id, function(err, flight) {
      // Mongoose arrays have everything that JS arrays
      // have, and more!
      flight.destinations.push(req.body);
      flight.save(function(err) {
      // Step 5: Data has been changed
      // so we redirect
         res.redirect(`/flights/${flight._id}`);
      });
   });
}