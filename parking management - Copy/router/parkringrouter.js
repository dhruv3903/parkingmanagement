const router=require('express').Router()
const reg=require('../controllers/regcontroller')
const parkingc=require('../controllers/parkingcontroller')
const handalogin=require('../helper/handallogin')


router.get('/',reg.login)
router.post('/',reg.logincheck)
router.get('/parking',handalogin,parkingc.parkingselectinon)
router.get('/logout',parkingc.logout)
router.get('/add',parkingc.adddetaile)
router.post('/add',parkingc.addentry)
router.get('/out',parkingc.outentry)
router.get('/parkingupdate/:id',parkingc.calculation)
router.get('/print/:id',parkingc.print)









module.exports=router