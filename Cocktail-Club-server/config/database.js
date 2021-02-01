const mongoose = require('mongoose')
const User = require('../models/User') 
const Drinc = require('../models/Drinc') 

mongoose.Promise = global.Promise
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

module.exports = (settings) => {  
  mongoose.connect(settings.db, {useNewUrlParser: true, useUnifiedTopology: true })
  let db = mongoose.connection

  db.once('open', err => {
    if (err) {
      throw err
    }

    console.log('MongoDB ready!')

    User.seedAdminUser()
    Drinc.seedDrincs()
  })

  db.on('error', err => console.log(`Database error: ${err}`))
}
