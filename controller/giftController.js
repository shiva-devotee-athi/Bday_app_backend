const BdayWish = require("../model/Gift");

const askWish = (req, res) => {
  try {
    const { bdayWish } = req.body;

    BdayWish.create({
      bdayWish: bdayWish,
    })
      .then(() => {
        res.status(201).json({
          message: "Your wish was sent successfully",
          status: true,
        });
      })
      .catch((error) => {
        console.error("Error creating Greeting in the database", error);
        res.status(500).json({
          error: "Error Happens asking your wish",
        });
      });
  } catch (error) {
    console.error("Error Happens in your entry", error);
    res.status(500).json({ message: "Error Happens", status: false });
  }
};

module.exports = {
  askWish,
};
