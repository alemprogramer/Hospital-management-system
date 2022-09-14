const Booking = require('../models/Booking')
exports.getAllBooking = async (req, res, next) => {
    try {
        const bookings = await Booking.find().populate({
            path:'doctorId',
            select:'name email'
        });
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
exports.deleteBooking = async (req, res, next) => {
    try {
        const booking = await Booking.findOneAndDelete(req.param.id);
        res.json({
            bookings:await Booking.find().populate({
                path:'doctorId',
                select:'name email'
            }),
            success: true
        });
        } catch (err) {
            next(err);
        }
}
