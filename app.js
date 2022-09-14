const express = require('express');
const app = express()
const mongoose = require('mongoose');
const morgan = require('morgan')
const Auth = require('auth-now');
const cors = require('cors');
const cookieParser = require('cookie-parser')


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(morgan('dev'));
app.use(cors());
app.use(cookieParser());

const auth = new Auth({
    model:require('./models/User'),
    googleClientID:process.env.GOOGLE_CLIENT_ID,
    googleClientSecret:process.env.GOOGLE_CLIENT_SECRET,
    facebookAppID:process.env.FACEBOOK_APP_ID,
    facebookAppSecret:process.env.FACEBOOK_APP_SECRET ,
    // accessTokenSecret,
    // refreshTokenSecret,

})



// console.log('auth'+auth.userRegister());
// console.log(auth)
//external routers 
const routers = require('./routers/routers');
routers(app);
let {authUser,authAdmin} = auth
app.use('/user',auth.router(app)); 
// app.get('/', async(req, res) => { 
//     // const Users = req.app.locals.userModel;
//     res.send('authSdk')
// })
app.get('/user1',authUser,(req, res)=>{
    res.send('authManager')
})

mongoose.connect('mongodb+srv://LMHasib:LMShsb@cluster0.db2ry.mongodb.net/HMS')
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(5001, () => {
        console.log('Listening on port 5001');
    })
}
).catch(err => {
    console.log('Error connecting to MongoDB:', err.message);
}
);
