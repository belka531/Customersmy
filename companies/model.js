const Sequelize = require('sequelize')
const sequelize = require('../db')

const Company = sequelize.define('customers', {
  name: {
    type: Sequelize.STRING,
    field: 'name',
    allowNull: false
  },
  foundingYear: {
    type: Sequelize.NUMBER,
    field: 'founding_year',
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  },
  })

module.exports = Company