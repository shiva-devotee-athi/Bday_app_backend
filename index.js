const express = require("express");
const cors = require("cors");
const connection = require("./database/connection");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
connection();

app.use(function (req ,res ,next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Set other headers to allow the necessary methods, headers, and credentials
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");

    next();
})

const router = require('./routes/router')

app.use('/api', router)
app.use('/Images', express.static('./Images'))

app.get('/',(req, res)=>{res.json('Hello Shri')})

app.listen(3000, () => {
  console.log("port running");
});