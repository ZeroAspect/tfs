const { DataTypes } = require("sequelize");
const db = require("../sequelize.js");

// Define the model
const Users = db.define(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ip: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    biografia: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }
)

module.exports = Users;