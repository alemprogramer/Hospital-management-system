const Doctor = require('../models/Doctor');
exports.getAllDoctor = async (req, res, next) => {
    try {
        const doctor = await Doctor.find();
        res.json({
            doctor
        });
    } catch (e) {
        next(e);
    }
}

exports.addDoctor = async (req, res, next) => {
    console.log(req.body);
    try {
        await Doctor.create({
            name: req.body.name,
            email: req.body.email,
            specialty: req.body.specialty,
            slots: [
                "08.00 AM - 08.30 AM",
                "08.30 AM - 09.00 AM",
                "09.00 AM - 9.30 AM",
                "09.30 AM - 10.00 AM",
                "10.00 AM - 10.30 AM",
                "10.30 AM - 11.00 AM",
                "11.00 AM - 11.30 AM",
                "11.30 AM - 12.00 AM",
                "1.00 PM - 1.30 PM",
                "1.30 PM - 2.00 PM",
                "2.00 PM - 2.30 PM",
                "2.30 PM - 3.00 PM",
                "3.00 PM - 3.30 PM",
                "3.30 PM - 4.00 PM",
                "4.00 PM - 4.30 PM",
                "4.30 PM - 5.00 PM"
            ]
        });
        res.json({
            doctor: await Doctor.find(),
            status: 200
        });
    } catch (e) {
        next(e);
    }
}