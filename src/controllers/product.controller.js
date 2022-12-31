const {ProductModel} = require("../models/index");
const {publishCustomService} = require("../services/publish.Service");


exports.addProduct = async ( req, res ) => {

    try {
        
        const product = {
            name:req.body.name,
            desc: req.body.desc,
            category: req.body.category,
            price: req.body.price,
            available:req.body.available,
            unit:req.body.unit,
            brand:req.body.brand
        }

        const response = await ProductModel.create(product);
        return res.json({
            "success":true,
            "response":response
        })

    } catch (error) {
        
        console.log(error);

        return res.json({
            "msg":'internal server error'
        })
    }
}   

exports.getAllProducts = async ( req, res ) => {

    try {
        
        const response = await ProductModel.find();
        return res.json({
            "success":true,
            "response":response
        })

    } catch (error) {
        
        console.log(error);

        return res.json({
            "msg":'internal server error'
        })
    }
} 

exports.getProductById = async ( req, res ) => {

    try {
        
        const response = await ProductModel.findById(req.params.productId);
        return res.json({
            "success":true,
            "response":response
        })

    } catch (error) {
        
        console.log(error);

        return res.json({
            "msg":'internal server error'
        })
    }
} 

exports.getProductByCategory = async ( req, res ) => {

    try {
        const response = await ProductModel.find({category:req.query.search});
        return res.json({
            "success":true,
            "response":response
        })

    } catch (error) {
        
        console.log(error);

        return res.json({
            "msg":error
        })
    }
} 

exports.subscribeEvents = async(req, res) => {

    const event = req.body.event;

    switch(event){

        case 'getAllCustomer':
            this.getAllCustomer(req,res);
            break;

        case 'getAllCustomer':
            this.getCustomer(req,res);
            break;   

        case 'test':
            console.log("checkkk");
            return res.json({
                "response":"this is test check"
            })
            break;   

        default:
            return res.json({
                "msg":"Invalid Event"
            })
            break     
            
    }

}

exports.test = async(req, res) => {
    
    try {
        
        const payload = {
            "event":"test"
        }
        const data = await publishCustomService(payload)
    
        return res.json({
            "response":"called to customer service",
            "data":data
        })

    } catch (error) {
        
        console.log(error);
        return  res.json({
            "response":"inter"
        })
    }

}