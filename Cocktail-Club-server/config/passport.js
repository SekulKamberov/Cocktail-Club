const passport = require('passport')
const localSignupStrategy = require('../passport/local-signup') 

module.exports = () => {
  passport.use('local-signup', localSignupStrategy) 
}
