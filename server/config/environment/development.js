'use strict';
/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: 'mongodb://admin:admin@ds135519.mlab.com:35519/welp'
  },

  // Seed database on startup
  seedDB: true

};
