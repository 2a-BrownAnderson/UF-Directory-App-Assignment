'use strict';
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

mongoose.connect(config.db.uri, function (err, db) {
  if (err) throw err;

  /* Fill out these functions using Mongoose queries*/

  var findLibraryWest = function() {
    /* 
      Find the document that contains data corresponding to Library West,
      then log it to the console. 
     */
     Listing.find({ code: 'LBW'}, function (err, listing) {
        if (err) throw err;
        console.log(JSON.stringify(listing));
     });
  };
  var removeCable = function() {
    /*
      Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
      on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
      and remove this listing from your database and log the document to the console. 
     */
     Listing.find({ code: 'CABL' }, function (err, entry) {
        if (err) throw err;
        //console.log('Removing:');
        //console.log(entry);
        
        entry.remove(function(err) {
          if (err) throw err;
        });
     });
  };
  var updatePhelpsMemorial = function() {
    /*
      Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
      log the updated document to the console. 
     */
  };
  var retrieveAllListings = function() {
    /* 
      Retrieve all listings in the database, and log them to the console. 
     */
  };

  findLibraryWest();
  removeCable();
  updatePhelpsMemorial();
  retrieveAllListings();

});