const express = require('express')
const connectMongoDB = require('./config/mongodb.js')
const app = express()
const env = require('dotenv').config()

const mongodb = connectMongoDB()


// dotenv configuration
const PORT = process.env.PORT; 
// get string on express body
app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/admin', require('./routes/admin.js'))

app.listen(5050, ()=>{
    console.log(`Server Is running on ${PORT} Port`);
})