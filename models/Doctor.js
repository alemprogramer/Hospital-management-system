const {Schema,model}= require('mongoose');

const DoctorSchema = new Schema({
    name: {
        type: String,
        require:[true ,'This field is required '],
        trim: true
    },
    email: {
        type: String,
        require:[true ,'This field is required '],
        trim: true
    },
    specialty:{
        type: String,
        require:[true ,'This field is required '],
        trim: true
    }

},{
    timeStamps: true
})

module.exports = model('doctor',DoctorSchema);