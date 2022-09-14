const Doctor = require('../models/Doctor');
exports.getAllDoctor =async (req,res,next)=>{
    try{
        const doctor = await Doctor.find();
        res.json({doctor});
    }catch(e){
        next(e);
    }
}

exports.addDoctor = async (req, res,next) => {
    try{
        const doctor = await Doctor.create({
            name: req.body.name,
            email: req.body.email,
            specialty: req.body.specialty,
        });
        res.json({doctor:await Doctor.find()});
    }catch(e){
        next(e);
    }
}
