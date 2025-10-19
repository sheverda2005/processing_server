require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")
const app = express()
const router = require("./routers/router")




const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors({
    credentials: true,
    origin: true
}))
app.use("/api", router)




async function start() {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("conected")
        app.listen(PORT, ()=> {
            console.log("Server has been started......")
        })

    } catch (e) {

    }

}

start()