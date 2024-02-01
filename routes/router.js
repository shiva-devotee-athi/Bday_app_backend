const wishController = require("../controller/wishController")
const giftController = require("../controller/giftController")
const { Router } = require("express");

const friendsRoute = Router()

friendsRoute.post('/addWishes', wishController.upload, wishController.sayYourWish)
friendsRoute.post('/askWishes', giftController.askWish)

module.exports = friendsRoute