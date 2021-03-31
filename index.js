require('dotenv').config();
const express = require("express");
const app = express();
const apis = require("./routes/apis.js")

//middleware for parsing data
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/apis",apis)



app.get("/",(req,res)=>{
    res.send("<h1 style='text-align:center;color:green;margin-top:2rem'> Hello World!</h2>")
})

const port = process.env.PORT||2050;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
