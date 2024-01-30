const Greeting = require("../model/FriendsWish");

const multer = require("multer");
const path = require("path");

const sayYourWish = (req, res) => {
  try {
    const { friendName, wish, greetingCard } = req.body;
    Greeting.where({ friendName })
      .findOne()
      .then(async (data) => {
        if (data) {
          res.status(200).json({
            message: "please check your name it already wished",
            status: true,
          });
        }

        await Greeting.create({
          friendName,
          image: req.file.path,
          wish,
          greetingCard,
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
              error: "Error creating Greeting in the database",
            });
          });
      });
  } catch (error) {
    console.error("Error Happens in your entry", error);
    res
      .status(500)
      .json({ message: "Error Happens in your entry", status: false });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");

module.exports = {
  upload,
  sayYourWish,
};
