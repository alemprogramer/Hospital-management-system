const router = require('express').Router()


const {getAllDoctor,addDoctor}= require('../controllers/DoctorController');
const routers = require('./routers');

router.get('/', getAllDoctor);
router.post('/',addDoctor);


module.exports = router