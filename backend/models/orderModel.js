import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.ObjectId,
      requried: true,
      ref:'User'
    },
    orderItems: [{
      name:{ type:String,required:true },
      qty:{ type:Number,required:true },
      image:{ type:String,required:true },
      price:{ type:String,required:true },
      product:{
        type: mongoose.Schema.Types.ObjectId,
        requried: true,
        ref:'Product'

       }
    }],
    shippingAddress: {
      address:{type:String,required:true},
      city:{type:String,required:true},
      postalCode:{type:String,required:true},
      country:{type:String,required:true},
    },
    paymentMethod: {
      type:String,
      required:true
    },
  },
  {
    timestamps: true,
  }
)

const Order=mongoose.model('Order',orderSchema)

export default Order
