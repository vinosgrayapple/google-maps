const sequelize = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.String
  })
}
