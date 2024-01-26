const wishController = require("../controller/wishController")
const { Router } = require("express");

const friendsRoute = Router()

friendsRoute.post('/addWishes', wishController.upload, wishController.sayYourWish)

module.exports = friendsRoute