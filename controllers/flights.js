const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
   new: newFlight,
   create,
   index,
   show
};

function newFlight(req, res) {
   const newFlight = new Flight();
   // Obtain the default date
   const dt = newFlight.departs;
   // Format the date for the value attribute of the input
   let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
   departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
   res.render('flights/new', { departsDate });
}

function create(req, res) {
   const flight = new Flight(req.body)
   flight.save(function(err) {
   // if we don't redirect, the new page will be shown
   // with /flights in the address bar
      if (err) return res.redirect('/flights/new');
      // for now, for a successful create/save
      // let's redirect back to new.ejs
      res.redirect(`/flights/${flight._id}`)
   });
}

function index(req, res) {
   Flight.find({}, function(err, flights) {
     flights.sort((first, second) => first.departs - second.departs)
     res.render('flights/index', { title: 'All Flights', flights });
   });
 }

function show(req, res) {
   Flight.findById(req.params.id, function(err, flight) {
      Ticket.find({flight: flight._id}, function(err, tickets) {
         res.render('flights/show', { title: 'Flight Detail', flight, tickets })
      });
   })
}