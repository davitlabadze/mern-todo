const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URL, {
     useNewUrlParser: true, 
     useUnifiedTopology: true })
     .then(()=> console.log("mongoDB Connected!"))
     .catch((err) => console.log(err));

app.use('/api/todos', require('./routes/router'))

app.listen(5000,()=>{
    console.log("Backend server is running!")
})