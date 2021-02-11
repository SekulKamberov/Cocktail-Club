const express = require('express')
const authCheck = require('../config/auth-check')
const Drinc = require('../models/Drinc') 
const Review = require('../models/Review') 

const router = new express.Router()

function validateDrincCreateForm (payload) {
  const errors = {}
  let isFormValid = true
  let message = ''

  payload.weight = parseInt(payload.weight)
  payload.price = parseFloat(payload.price)

  if (!payload || typeof payload.name !== 'string' || payload.name.length < 3) {
    isFormValid = false
    errors.name = 'Drinc name must be at least 3 symbols.'
  }

  if (!payload || typeof payload.recipeBy !== 'string' || payload.recipeBy.length < 6) {
    isFormValid = false
    errors.recipeBy = 'The name must be at least 6 symbols.'
  }

  if (!payload || payload.ingredients.length < 3 || payload.ingredients.indexOf(', ') > -1 || payload.ingredients === '') {
    isFormValid = false
    errors.ingredients = 'Ingredients must be at least 3 characters long and separated by comma and without empty spaces :)'
  } 

  if (!payload || payload.ingredientsInfo.length < 3 || payload.ingredientsInfo.indexOf(', ') > -1 || payload.ingredientsInfo === '') {
    isFormValid = false
    errors.ingredientsInfo = 'Every ingredient must be at least 3 characters long and separated by comma and without empty spaces :)'
  } 

  if (!payload || typeof payload.description !== 'string' || payload.description.length < 10 || payload.description.length > 290) {
    isFormValid = false
    errors.description = 'Description must be at least 10 symbols and less than 290 symbols.'
  }

  if (!payload || !payload.price || payload.price < 0) {
    isFormValid = false
    errors.price = 'Price must be a positive number.'
  }

  if (!payload || !payload.weight || payload.weight < 200 || payload.weight > 1000) {
    isFormValid = false
    errors.weight = 'Weight must be between 200 and 1000 grams.'
  }

  if (!payload || typeof payload.image !== 'string' || !(payload.image.startsWith('https://') || payload.image.startsWith('http://')) || payload.image.length < 14) {
    isFormValid = false
    errors.image = 'Please enter valid Image URL. Image URL must be at least 14 symbols.'
  }

  if (!isFormValid) {
    message = 'Check the form for errors.'
  }

  return {
    success: isFormValid,
    message,
    errors
  }
}

router.get('/all', (req, res) => {
  Drinc
    .find()
    .populate('reviews')
    .then(drincs => {
      res.status(200).json(drincs)
    })
}) 

router.post('/create', authCheck, (req, res) => {
  const drincObj = req.body
  if (req.user.roles.indexOf('Admin') > -1) {
    const validationResult = validateDrincCreateForm(drincObj)
    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    }

    drincObj.ingredients = drincObj.ingredients.split(',').filter(i => i !== '')

    Drinc
      .create(drincObj)
      .then((createdDrinc) => {
        res.status(200).json({
          success: true,
          message: 'Drinc added successfully.',
          data: createdDrinc
        })
      })
      .catch((err) => {
        console.log(err)
        let message = 'Something went wrong, please Check the form for errors.'
        if (err.code === 11000) {
          message = 'Drinc with the given name already exists.'
        }
        return res.status(400).json({
          success: false,
          message: message
        })
      })
  } else {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
})

router.post('/edit/:id', authCheck, (req, res) => {
  if (req.user.roles.indexOf('Admin') > -1) {
    const drincId = req.params.id
    const drincObj = req.body
    const validationResult = validateDrincCreateForm(drincObj)
    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    }

    drincObj.ingredients = drincObj.ingredients.split(',').filter(i => i !== '')

    Drinc
      .findById(drincId)
      .then(existingDrinc => {
        existingDrinc.name = drincObj.name
        existingDrinc.recipeBy = drincObj.recipeBy
        existingDrinc.ingredients = drincObj.ingredients
        existingDrinc.ingredientsInfo = drincObj.ingredientsInfo
        existingDrinc.weight = drincObj.weight
        existingDrinc.description = drincObj.description
        existingDrinc.price = drincObj.price
        existingDrinc.image = drincObj.image

        existingDrinc
          .save()
          .then(editedDrinc => {
            res.status(200).json({
              success: true,
              message: 'Drinc edited successfully.',
              data: editedDrinc
            })
          })
          .catch((err) => {
            console.log(err)
            let message = 'Something went wrong, please Check the form for errors.'
            if (err.code === 11000) {
              message = 'Drinc with the given name already exists.'
            }
            return res.status(400).json({
              success: false,
              message: message
            })
          })
      })
      .catch((err) => {
        console.log(err)
        const message = 'Something went wrong, please Check the form for errors.'
        return res.status(400).json({
          success: false,
          message: message
        })
      })
  } else {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
}) 

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  if (req.user.roles.indexOf('Admin') > -1) {
    Drinc
      .findById(id)
      .then((drinc) => {
        Review
          .deleteMany({
            _id: {
              '$in': drinc.reviews
            }
          })
          .then(() => {
            drinc
              .remove()
              .then(() => {
                return res.status(200).json({
                  success: true,
                  message: 'Drinc deleted successfully!'
                })
              })
          })
      })
      .catch(() => {
        return res.status(400).json({
          success: false,
          message: 'Entry does not exist!'
        })
      })
  } else {
    return res.status(401).json({
      success: false,
      message: 'Invalid credentials!'
    })
  }
}) 

router.post('/like/:id', authCheck, (req, res) => {
  const id = req.params.id
  const username = req.user.username
  Drinc
    .findById(id)
    .then(drinc => {
      if (!drinc) {
        const message = 'The drinc not found.'
        return res.status(400).json({
          success: false,
          message: message
        })
      }

      let likes = drinc.likes
      if (!likes.includes(username)) {
        likes.push(username)
      }
      drinc.likes = likes
      drinc
        .save()
        .then((drinc) => {
          res.status(200).json({
            success: true,
            message: 'The drinc liked successfully.',
            data: drinc
          })
        })
        .catch((err) => {
          console.log(err)
          const message = 'Something went wrong :('
          return res.status(400).json({
            success: false,
            message: message
          })
        })
    })
    .catch((err) => {
      console.log(err)
      const message = 'Something went wrong :('
      return res.status(400).json({
        success: false,
        message: message
      })
    })
}) 

router.post('/unlike/:id', authCheck, (req, res) => {
  const id = req.params.id
  const username = req.user.username
  Drinc
    .findById(id)
    .then(drinc => {
      if (!drinc) {
        let message = 'The drinc not found.'
        return res.status(400).json({
          success: false,
          message: message
        })
      }

      let likes = drinc.likes
      if (likes.includes(username)) {
        const index = likes.indexOf(username)
        likes.splice(index, 1)
      }

      drinc.likes = likes
      drinc
        .save()
        .then((drinc) => {
          res.status(200).json({
            success: true,
            message: 'The drinc unliked successfully.',
            data: drinc
          })
        })
        .catch((err) => {
          console.log(err)
          const message = 'Something went wrong :('
          return res.status(400).json({
            success: false,
            message: message
          })
        })
    })
    .catch((err) => {
      console.log(err)
      const message = 'Something went wrong :('
      return res.status(400).json({
        success: false,
        message: message
      })
    })
}) 

module.exports = router
