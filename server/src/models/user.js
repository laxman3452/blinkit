import mongoose from "mongoose";

// Base user schema

const userSchema = new mongoose.Schema({
    name: {type:String},
    role:{
        type:String,
        enum: ["customer","Admin","DeliveryPartner","bot"],
        required:true

    },
    isActivated:{type:Boolean,default:false},
})

const customerSchema = new mongoose.Schema({
    ...userSchema.obj,
    phone:{type:Number,reuired:true,unique:true},
    role:{type:String,enum:["Customer"], default: "Customer"},
    liveLocation:{
        lattitude:{type:Number},
        longitude:{type:Number},
    },
    address : {type:String},


})

const deliveryPartnerSchema = new mongoose.Schema({
    ...userSchema.obj,
    email:{type:String, required:true,unique:true},
    phone:{type:Number,reuired:true,unique:true},
    role:{type:String,enum:["DeliveryPartner"], default: "DeliveryPartner"},
    liveLocation:{
        lattitude:{type:Number},
        longitude:{type:Number},
    },
    address : {type:String},
    branch:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Branch"
    }


})

const adminSchema = new mongoose.Schema({
    ...userSchema.obj,
    email:{type:String, required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,enum:["Admin"],default:"ADmin"}
 


})


export const Customer = mongoose.model("Customer",customerSchema);
export const DeliveryPartner = mongoose.model("DeliveryPartner",deliveryPartnerSchema);
export const Admin = mongoose.model("Admin",adminSchema);

