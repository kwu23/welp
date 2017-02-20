'use strict';

import mongoose from 'mongoose';

var SitePageSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  numberReviews: Number,
  reviews: [{
    thisIsFillerModel: String,
    descript: String,
    rate: Number
  }],
  category: String
});

export default mongoose.model('SitePage', SitePageSchema);
