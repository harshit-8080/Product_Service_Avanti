const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const serverConfig = require("./configs/server.config");
const dbConnection = require("./configs/db.config");
const ProductRouter = require("./routes/product.routes");


const app = express();

const startServer = async() => {


    // middlewares
    app.use(cors())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(ProductRouter);
    // test api
    app.get("/",(req,res)=>{
        res.json({"response":"For Product"})
    })

    app.listen(serverConfig.PORT,async () => {

        console.clear();
        console.log(`Product Service started at ${serverConfig.PORT}`);
        await dbConnection();
        
    })
}

startServer();