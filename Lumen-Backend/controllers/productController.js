import myproduct from "../models/productModel.js"



// create products admin
const createProduct = async(req,res,next) => {
    const product = await myproduct.create(req.body)
    res.status(201).json({
        success:true,
        product
    })
}


// get all products
const getAllProducts = async (req, res) => {
    const products = await myproduct.find()
    res.status(200).json({
        success: true,
        products
    })
}
//get single product by id
const getProduct = async (req, res,next) => {
    const product = await myproduct.findById(req.params.id)
    if (!product) {
     return   res.status(500).json({
            success: false,
            message:"product not found"
        })
     
    }
    res.status(200).json({
        success: true,
        product
    })
}

// update product
const updateProduct = async (req, res) => {
    const products = await myproduct.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: true
    })
    res.status(200).json({
        success: true,
        products
    })
}

//delete product

const deleteProduct = async (req, res) => {
    const product = await myproduct.findByIdAndDelete(req.params.id)
    res.status(200).json({
        success: true,
        message: "product deleted sucessfully"
    })
}

export {getAllProducts,createProduct,updateProduct,deleteProduct,getProduct}