const {Schema,model} = require('mongoose');

const bookingSchema = new Schema({
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
    },
    date:String,
    patient:String,
    patientName:String,
    phone:String,
},{
    timeStamps: true
})

module.exports = model('booking',bookingSchema)

