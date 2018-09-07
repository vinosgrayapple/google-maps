const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const db = {}
const config = require('../config/config')
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)
