const mysql = require("mysql");
const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 2,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const connectiondDB = () => {
  sequelize
    .authenticate()
    .then(() => console.log("connected successfully"))
    .catch((err) => {
      console.error("err" + err);
    });
};

const syncDB = () => {
  sequelize.sync({ alter: true, force: false }).then(() => {
    console.log("resync the data successfully");
  });
};

module.exports = { syncDB, connectiondDB, sequelize };
