const authRoutes = require('../routes/auth') 

module.exports = (app) => {
  app.use('/auth', authRoutes) 
}
