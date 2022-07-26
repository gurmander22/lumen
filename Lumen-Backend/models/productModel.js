import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim:true
    },
    description: {
        type: String,
        required:[true,'Please enter product description']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price'],
        maxLength:[8,'price cannot exceed 8 characters']
    },
    rating: {
        type: Number,
        default:0
    },
    images: [{
        public_id:{
            type:String,
            required:true
        },
          url:{
            type:String,
            required:true
        }
    }],
      category: {
        type: String,
        required:[true,'Please enter product category']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [4, 'stock cannot exceed 4 characters'],
        default:1
    },
    numOfReviews: {
        type: Number,
        default:0
    },
    reviews: [
        {
            name: {
                type: String,
                required:true
            },
            rating: {
                type: Number,
                required:true
            },
            comments: {
                type: String,
                required:true
                }
        }
    ],
    createdAt: {
        type: Date,
        default:Date.now
        }
})

const myproduct = mongoose.model('products', productSchema)
export default myproduct