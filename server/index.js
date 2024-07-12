const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000

const app = express()


const start = async() => {
    try {
        await mongoose.connect(
					`mongodb+srv://amanewave:<password>@notio.eys9cxf.mongodb.net/?retryWrites=true&w=majority&appName=notio`
				)
        app.listen(PORT, () => console.log(`server started on ${PORT} port`))
    } catch (e) {
        console.log(e);
    }
}

start()