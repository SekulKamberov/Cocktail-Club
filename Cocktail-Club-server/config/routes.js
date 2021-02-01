const authRoutes = require('../routes/auth') 
const drincRoutes = require('../routes/drinc')

module.exports = (app) => {
  app.use('/auth', authRoutes) 
  app.use('/drinc', drincRoutes)
}
