const express = require('express')
const authCheck = require('../config/auth-check')
const Drinc = require('../models/Drinc')
const Review = require('../models/Review')

const router = new express.Router()

router.post('/create/:drincId', authCheck, (req, res) => {
    const drincId = req.params.drincId
    const review = req.body.review
    const username = req.user.username
  
    if (review.length < 4) {
      const message = 'Review must be at least 4 characters long.'
      return res.status(400).json({
        success: false,
        message: message
      })
    }
  
    Drinc
      .findById(drincId)
      .then(drinc => {
        if (!drinc) {
          return res.status(400).json({
            success: false,
            message: 'drinc not found.'
          })
        }
  
        let reviewObj = {
          reviewText: review,
          creatorUsername: username
        }
  
        Review
          .create(reviewObj)
          .then(review => {
            let reviews = drinc.reviews
            reviews.push(review._id)
            drinc.reviews = reviews
            drinc
              .save()
              .then((drinc) => {
                res.status(200).json({
                  success: true,
                  message: 'Review added successfully.',
                  data: review
                })
              })
              .catch((err) => {
                console.log(err)
                const message = 'Something went wrong :( Check the form for errors.'
                return res.status(400).json({
                  success: false,
                  message: message
                })
              })
          })
          .catch((err) => {
            console.log(err)
            const message = 'Something went wrong :( Check the form for errors.'
            return res.status(400).json({
              success: false,
              message: message
            })
          })
      })
      .catch((err) => {
        console.log(err)
        const message = 'Something went wrong :( Check the form for errors.'
        return res.status(400).json({
          success: false,
          message: message
        })
      })
  })

module.exports = router
