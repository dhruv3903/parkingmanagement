const Parking=require('../models/parking')


exports.parkingselectinon=async(req,res)=>{
    //console.log(req.session)
    const username=req.session.username
    const record=await Parking.find()
   // console.log(record)
res.render('parking.ejs',{username,record})
}

exports.logout=(req,res)=>{
req.session.destroy()
res.redirect('/')
}

exports.adddetaile=(req,res)=>{
res.render('addform.ejs',{username:req.session.username,message:''})
}

exports.addentry=(req,res)=>{
    const{vno,vtype}=req.body
    const record=new Parking({ vno:vno,vtype:vtype})
    record.save()
    //console.log(record)
    res.render('addform.ejs',{message:'entery succes',username:req.session.username})
}

exports.outentry=async(req,res)=>{
    const username=req.session.username
    const record=await Parking.find()
res.render('parkingout.ejs',{username,record})

}

exports.calculation=async(req,res)=>{
const id=req.params.id
const vout= new Date()
const record= await Parking.findById(id)
//console.log(record.vtype)
const totalspenttime=(vout-record.vin)/(1000*60*60)
console.log(totalspenttime)
let amount=null
if(record.vtype=='two wheeler'){
    amount=totalspenttime*30
}else if(record.vtype=='three wheeler'){
    amount=totalspenttime*50
}else if(record.vtype=='four wheeler'){
    amount=totalspenttime*100
}else if(record.vtype=='hw'){
    amount=totalspenttime*150
}else if(record.vtype=='lw'){
    amount=totalspenttime*120
}
else{
    amount=totalspenttime*70
}
if(amount<30){
    amount=30
}
await Parking.findByIdAndUpdate(id,{vout:vout,amount:Math.round(amount),status:'out'})
res.redirect('/out')
}

exports.print=async(req,res)=>{
const record=await Parking.findById(req.params.id)
var totalspenttime=(record.vout-record.vin)
//totalspenttime=Math.round(totalspenttime)
console.log(totalspenttime)
//console.log(record.vtype)
    res.render('print.ejs',{record,totalspenttime})

}