const mongoose = require('mongoose')

const connectMongoDB = () =>{
    try {
        mongoose.connect(process.env.mongoDB_Token)
        console.log(`Database connected`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectMongoDB;