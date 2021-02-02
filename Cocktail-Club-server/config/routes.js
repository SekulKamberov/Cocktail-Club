const authRoutes = require('../routes/auth') 
const drincRoutes = require('../routes/drinc')
const reviewRoutes = require('../routes/review')
const ordersRoutes = require('../routes/order')

module.exports = (app) => {
  app.use('/auth', authRoutes) 
  app.use('/drinc', drincRoutes)
  app.use('/reviews', reviewRoutes)
  app.use('/order', ordersRoutes)
}
