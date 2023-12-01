const mongoose=require('mongoose')

const ParkingSchema=mongoose.Schema({
    vno:{type:String,required:true},
    vin:{type:Date,default:new Date()},
    vtype:{type:String,required:true},
    status:{type:String,default:'Parked',required:true},
    vout:Date,
    amount:Number,
    parkedDate:{type:Date,default:new Date()}
})

module.exports=mongoose.model('parking',ParkingSchema)



