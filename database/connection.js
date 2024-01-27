const mongoose=require("mongoose");
require("dotenv").config();

const username=process.env.MONGOOSE_USERNAME;
const password=process.env.MONGOOSE_PASSWORD;
const dbname=process.env.MONGOOSE_DBNAME;
const cluster=process.env.MONGOOSE_CLUSTER;



const connection=()=>mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}/${dbname}`).then(()=>{
    console.log("connection established successfully");
}).catch((err)=>{
    console.log("error occured while connecting mongo db",err);
});

module.exports=connection;