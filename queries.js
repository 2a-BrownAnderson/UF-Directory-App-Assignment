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
        console.log('\nExecuting findLibraryWest()......\n');
        console.log(listing);
     });
  };
  var removeCable = function() {
    /*
      Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
      on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
      and remove this listing from your database and log the document to the console. 
     */
     Listing.findOne({ code: 'CABL' }, function (err, listing) {
        if (err) throw err;     
        console.log('\nExecuting removeCable()........\n');
        if (listing) {
          console.log('Removing:');
          console.log(listing);
          listing.remove(function(err) {
            if (err) throw err;
          });
        }
        else {
          console.log('CABL not found for removal.');
        }
     });
  };
  var updatePhelpsMemorial = function() {
    /*
      Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
      log the updated document to the console. 
     */
     Listing.findOne({code: 'PHL'}, function (err, listing) {
      if (err) throw err;
      console.log('\nExecuting updatePhelpsMemorial().......\n');
      if (listing) {
        listing.address = '100 Phelps Lab, P.O. Box 116350, Gainesville, FL  32611';
        listing.save();
        console.log(listing);
      }
      else {
        console.log('Phelps not found.');
      }

     });


  };
  var retrieveAllListings = function() {
    /* 
      Retrieve all listings in the database, and log them to the console. 
     */
     Listing.find({}, function (err, listings) {
      if (err) throw err;
      console.log('\nExecuting retrieveAllListings().......\n');
      console.log(listings);
     });
  };

  findLibraryWest();
  removeCable();
  updatePhelpsMemorial();
  retrieveAllListings();

});