const {Schema,model} = require('mongoose');

const bookingSchema = new Schema({
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'doctor',
    },
    slot:String,
    date:String,
    patient:String,
    patientName:String,
    phone:String,
    userId:String,
},{
    timeStamps: true
})

module.exports = model('booking',bookingSchema)

