const mongoose = require('mongoose')

const REQUIRED_VALIDATION_MESSAGE = '{PATH} is required'

let reviewSchema = mongoose.Schema({
    creatorUsername: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
    reviewText: {type: mongoose.Schema.Types.String, required: REQUIRED_VALIDATION_MESSAGE},
    lastModified: {type: mongoose.Schema.Types.Date, required: REQUIRED_VALIDATION_MESSAGE, default: Date.now}
  })

  let Review = mongoose.model('Review', reviewSchema)

  module.exports = Review
