import mongoose from "mongoose";

const reviewSchema=mongoose.Schema(
  {
    name: {
      type: String,
      requried: true,
    },
    rating: {
      type: Number,
      requried: true,
    },
    comments: {
      type: String,
      requried: true,
    },
  },{
    timestamps:true,
  }
)

const productSchema = mongoose.Schema(
  {
    user:{
      type:mongoose.Schema.Types.ObjectId,
      required:true,
      ref:'User',
    },
    name: {
      type: String,
      requried: true,
    },
    image: {
      type: String,
      requried: true,
    },
    brand: {
      type: String,
      requried: true,
    },
    category: {
      type: String,
      requried: true,
    },
    description: {
      type: String,
      requried: true,
    },
    reviews:[reviewSchema],
    rating: {
      type: Number,
      requried: true,
      default:0
    },
    numReviews: {
      type: Number,
      requried: true,
      default:0
    },
    price: {
      type: Number,
      requried: true,
      default:0
    },
    countInStock: {
      type: Number,
      requried: true,
      default:0
    },
  },
  {
    timestamps: true,
  }
)

const Product=mongoose.model('Product',productSchema)

export default Product
