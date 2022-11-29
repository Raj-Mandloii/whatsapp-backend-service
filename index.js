
const express = require("express")
const {connection} = require("./config/db")
const {userController} = require("./routes/user.routes.js")
const cors = require('cors');
const parser = require("body-parser")
const app = express();
app.use(cors())
require("dotenv").config()

app.use(parser.json({extended: true}));
app.use(parser.urlencoded({extended: true}));
app.use("/",userController)




const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
    try{
        await connection;
        console.log("Connected to db")
    }
    catch(err){
        console.log("Error connnecting to DB")
        console.log(err)
    }
    console.log(`listening on PORT ${PORT}`)
})