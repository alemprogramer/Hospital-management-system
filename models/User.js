const {Schema,model} = require('mongoose');

const userSchema = new Schema({
    name:{
        type: 'string',
        // require:[true,'Please Enter your Name '],
        trim:true
    },
    email: {
        type: 'string',
        require:[true,'Please Enter your Email '],
        trim: true
    },
    password: {
        type: 'string',
    },
    role:{
        type: Number,
        default:0  // user:0,admin:1
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
    },
    googleID:String,
    facebookID:String,
    provider:{
        type:String,
        default:'custom'
    }

},{
    timeStamp: true
})

module.exports = model('User',userSchema);