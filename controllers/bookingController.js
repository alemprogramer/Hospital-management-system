const Booking = require('../models/Booking')
exports.getAllBooking = async (req, res, next) => {
    try {
        const bookings = await Booking.find();
        res.json({bookings});
        } catch (err) {
            next(err);
        }   
}
exports.postBooking = async (req, res, next) => {
    try {
        const booking = await Booking.create(req.body);
        res.json({
            booking,
            success: true
        });
        } catch (err) {
            next(err);
        }   
}
