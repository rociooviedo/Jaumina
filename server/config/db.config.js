const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://niaras27:Niaras27@cluster0.6ixotkv.mongodb.net/?retryWrites=true&w=majority' , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose