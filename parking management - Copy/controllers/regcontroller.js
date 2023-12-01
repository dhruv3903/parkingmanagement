const reg=require('../models/reg')


exports.login=(req,res)=>{
    res.render('login.ejs',{message:''})
}

exports.logincheck=async(req,res)=>{
const username=req.body.us
//console.log(username)
const password=req.body.pass
const record=await reg.findOne({username:username})
if(record!==null){
    if(record.password==password){
        req.session.isAuth=true
        req.session.username=username
        req.session.userid=record.id
res.redirect('/parking')
    }else{
        res.render('login.ejs',{message:'worng details'})
    }
}else{
res.render('login.ejs',{message:'worng details'})
}


}