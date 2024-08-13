const Products = require('../Models/Product'); 
// add products
 const addPro = async (req, res) => {
    try {
        const product = new Products(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};


// get all products
const getProducts = async (req , res)=>{
    try {
        const product = await Products.find({});
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// get pro from her id
const getProById = async (req , res) =>{
    try{
        const {id} = req.params
        const pro = await Products.findById(id)
        res.status(200).json(pro)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// delete id
const deletPro = async (req , res) =>{
    try{
        const {id} = req.params
        const pro = await Products.findByIdAndDelete(id)
        res.status(200).json(pro)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
// delete id
const updatePro = async (req , res) =>{
    try{
        const {id} = req.params
        const pro = await Products.findByIdAndUpdate(id , req.body)
        res.status(200).json(pro)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addPro,
    getProducts,
    getProById,
    deletPro,
    updatePro
}