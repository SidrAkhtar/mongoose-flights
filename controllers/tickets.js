const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
   new: newTicket,
   create
}

function newTicket(req, res) {
   let flightId = req.params.id
   res.render('tickets/new', {flightId})
}

function create(req, res) {
   req.body.flight = req.params.id
   Ticket.create(req.body, function(err) {
   // if we don't redirect, the new page will be shown
   // with /tickets in the address bar
      if (err) return res.redirect('/tickets/new');
      // for now, for a successful create/save
      // let's redirect back to new.ejs
      res.redirect(`/flights/${req.params.id}`)
   });
}