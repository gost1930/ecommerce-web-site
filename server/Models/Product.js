const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title:{
            type: String ,
            required: false
        },
        price:{
            type: Number,
            required: false,
        },
        img:{
            type: String,
            required: false
        },
        action:{
            type: Boolean,
            required: false
        },
        action:{
            type:String,
            required: false
        }
});

// Create Models
const Products = mongoose.model('product' , ProductSchema)

module.exports = Products;