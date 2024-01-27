const { Schema, model } = require("mongoose");

const GreetingSchema = new Schema(
  {
    image: {
      type: String,
    },
    friendName: {
      type: String,
      required: true,
    },
    wish: {
      type: String,
      required: true,
    },
    greetingCard: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true
  }
);

const Greeting = model("Greeting", GreetingSchema);
module.exports = Greeting;
