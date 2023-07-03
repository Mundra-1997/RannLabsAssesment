const express = require("express");
const app = express();
const cors = require('cors')
require('dotenv').config()
app.use(cors());
const mongoose = require('mongoose')
const publisherRoute = require("./routes/publisherRoutes");
const authorRoutes = require("./routes/autherRoutes")
const bookRoutes = require("./routes/bookRoutes")
app.use(express.json())
app.use('/publisher',publisherRoute)
app.use('/author',authorRoutes)
app.use('/upload',bookRoutes)

mongoose.connect(process.env.MONGO_URL, {
    dbName: "Device"
})
.then(()=> {
console.log('connection db succesful')
})
.catch((err)=> {
    console.log(`Error: ${err.message}`)
})

app.listen(process.env.PORT , ()=> console.log(`server is running`))
