const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({

    name:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    unit:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    available:{
        type:String,
        require:true
    },
    brand:{
        type:String
    }
},{
    toJSON:{
        transform(doc,ret){
            delete ret.createdAt,
            delete ret.updatedAt,
            delete ret.__v
        }
    }
})

const ProductModel = mongoose.model("ProductSchema", ProductSchema);

module.exports = ProductModel;