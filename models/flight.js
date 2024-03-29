const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
   airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
   },
   arrival: {
      type: Date,
      default: function() {
         return new Date().getFullYear();
      }
   }
})

const flightSchema = new Schema({
   airline: {
      type: String,
      enum: ['American', 'Southwest', 'United']
   },
   airport: {
      type: String,
      enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
   },
   flightNo: {
      type: Number,
      min: 10,
      max: 9999,
   },
   departs: {
      type: Date,
      default: function() {
         let today = new Date();
         return today.setFullYear(today.getFullYear() + 1);
      }
   },
   destinations: [destinationSchema]
})


// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);