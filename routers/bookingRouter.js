const router = require('express').Router()

const {getAllBooking, postBooking} = require('../controllers/bookingController');


router.get('/', getAllBooking)
router.post('/',postBooking)


module.exports = router ;