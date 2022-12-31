const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");


const app = express();


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



// test api
app.get("/",(req,res)=>{
    res.json({
        "response":"For Product"
    })
})

app.listen(7002,()=>{
    console.log("server started at 3000");
})