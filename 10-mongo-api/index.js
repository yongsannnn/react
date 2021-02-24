// Setup Starts
const express = require("express");
const cors = require("cors")
require("dotenv").config();
const MongoUtil = require("./MongoUtil");
const mongoUrl = process.env.MONGO_URL;
let app = express ();
app.use(express.json());
app.use(cors());
// Setup end

async function main(){
    let db = await MongoUtil.connect(mongoUrl, "tgc-11")
    console.log("database connected")


    
}

main()
// Route begins here

app.listen(3001, () => {
    console.log("server has started")
})