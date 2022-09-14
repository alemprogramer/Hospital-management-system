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
        });
        res.json({
            doctor: await Doctor.find(),
            status:200
        });
    } catch (e) {
        next(e);
    }
}