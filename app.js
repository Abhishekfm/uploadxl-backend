require("dotenv").config()
const express = require("express")
const app = express()
const connectToDb = require("./config/db")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const userRoute = require("./routes/user.route")

app.use(express.json())

app.use(express.urlencoded({
    extended:true
}))
const corsOptions ={
    origin:"http://localhost:3000", 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
    allowedHeaders:['Content-Type', 'Authorization']
}

app.use(cookieParser())

app.use(cors(corsOptions))

connectToDb()

app.use("/api", userRoute)

module.exports = app