if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const { Sequelize } = require('sequelize')

// create Sequelize 
const sequelize = new Sequelize(
  process.env.DB_NAME || 'poker_tournament',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development'
  }
)


// db init
sequelize.init = async () => {
  await sequelize.authenticate()
  await sequelize.sync()
  console.log('✅ Database ready!')
}

module.exports = sequelize