const { Schema, model } = require("mongoose");

const WishSchema = new Schema(
  {
    bdayWish: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true
  }
);

const BdayWish = model("bdaywish", WishSchema);
module.exports = BdayWish;
