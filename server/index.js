const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use("/auth", authRouter)
app.use(cors())
const start = async() => {
    try {
        await mongoose.connect(
					`mongodb+srv://amanewave:G9hBsZYokKAVTDO7@notio.eys9cxf.mongodb.net/?retryWrites=true&w=majority&appName=notio`
				)
        app.listen(PORT, () => console.log(`server started on ${PORT} port`))
    } catch (e) {
        console.log(e);
    }
}

start()