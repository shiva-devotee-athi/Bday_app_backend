const express = require("express");
const cors = require("cors");
const { connectiondDB, syncDB } = require("./database/connection");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectiondDB();
syncDB();

const router = require('./routes/router')

app.use('/api', router)
app.use('/Images', express.static('./Images'))

app.listen(3000, () => {
  console.log("port running");
});