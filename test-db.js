const sequelize = require('./config/mysqlConnection')

sequelize.init()
  .then(() => console.log('Test passed!'))
  .catch(err => console.error('Test failed:', err.message))
  .finally(() => process.exit(0))
