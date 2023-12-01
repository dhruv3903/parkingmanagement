function handallogin(req,res,next){
if(req.session.isAuth){
    next()
}else{
    res.redirect('/')
}
}

module.exports=handallogin