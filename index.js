const express =require('express');
const mongoose =require('mongoose');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT|| 3000

// connect mongo db atlas
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}).then(()=>{
    console.log("Connected to mongodb atlas");
}).catch(error=>{
    console.log("Something went wrong...",error);
})
app.listen(PORT ,() =>{
    console.log("Server started at port " , PORT);
})




/*
const express= require('express');
const app = express();
const PORT = process.env.PORT || 3000
app.listen(PORT,() =>{
    console.log("server started at PORT", PORT);

}) */