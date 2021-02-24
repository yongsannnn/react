// Setup Starts
const express = require("express");
const cors = require("cors")
require("dotenv").config();
const MongoUtil = require("./MongoUtil");
const mongoUrl = process.env.MONGO_URL;
const ObjectId = require("mongodb").ObjectId;
let app = express ();
app.use(express.json());
app.use(cors());
// Setup end

async function main(){
    let db = await MongoUtil.connect(mongoUrl, "tgc-11")
    console.log("Database connected")

    // Get - Fetch information
    app.get("/task" ,async(req,res)=>{
        let tasks = await db.collection("tasks").find().toArray();
        res.status(200)
        res.send(tasks)
    })

    // Post - Add new document
    app.post("/task", async (req,res)=>{
        let title = req.body.title
        let done = req.body.done

        try {
            let results = await db.collection("tasks").insertOne({
                title : title,
                done: done
            })
            res.status(200)
            res.send(results)
        } catch (e) {
            res.status (500)
            res.send({
                "Message" : "Unable to insert"
            });
            console.log(e)
        }
    })

    // Put 
    app.put("/task", async (req, res)=>{

        try {
            await db.collection("tasks").updateOne({
                "_id": ObjectId(req.body._id)
            },{
                "$set":{
                    "title":req.body.title,
                    "done":req.body.done
                }
            })
            res.status(200)
            res.send("Update received")
        } catch (e){
            res.status(500)
            res.send({
                "Message" : "Unable to update"
            })
            console.log(e)
        }
    })

    // Delete
    app.delete("/task/:id", async (req,res)=>{
        await db.collection("tasks").deleteOne({
            _id:ObjectId(req.params.id)
        })
    })
    res.status(200);
    res.send("Deleted the request")

}

main()
// Route begins here

app.listen(3001, () => {
    console.log("server has started")
})