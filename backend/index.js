const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true })
    .then(()=> console.log("mongoDB Connected!"))
    .catch((err) => console.log(err));

app.listen(5000,()=>{
   console.log("Backend server is running!")
})
