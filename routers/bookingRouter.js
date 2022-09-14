const router = require('express').Router()

const {getAllBooking, postBooking,deleteBooking} = require('../controllers/bookingController');


router.get('/', getAllBooking)
router.post('/',postBooking)
router.get('/:id',deleteBooking)


module.exports = router ;