'use strict';

import mongoose from 'mongoose';

var SitePageSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  numberReviews: Number,
  reviews: Array,
  category: String
});

export default mongoose.model('SitePage', SitePageSchema);
