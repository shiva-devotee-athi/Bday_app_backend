const { sequelize } = require("../database/connection");
const { DataTypes, UUID, UUIDV4 } = require("sequelize");

const Greeting = sequelize.define(
  "greetings",
  {
    id: {
      type: UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      unique: true,
    },
    image: {
      type: DataTypes.STRING,
    },
    friendName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wish: {
      type: DataTypes.TEXT,
    },
    greetingCard: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Greeting;
