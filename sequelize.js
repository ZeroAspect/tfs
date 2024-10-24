const { Sequelize } = require("sequelize");

const db = new Sequelize("mysql://root:gpFIwjsmCrZIwpFXKAUTwFmZGVXOGVHV@autorack.proxy.rlwy.net:32944/railway")

module.exports = db;