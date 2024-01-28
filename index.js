const express = require("express");
const cors = require("cors");
const connection = require("./database/connection");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
connection();

const router = require('./routes/router')

app.use('/api', router)
app.use('/Images', express.static('./Images'))

app.get('/',(req, res)=>{res.json('Hello Shri')})

app.listen(3000, () => {
  console.log("port running");
});