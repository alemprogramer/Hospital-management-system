const doctorRouter = require('./doctorRouter')
const bookingRouter = require('./bookingRouter')
const routers = [
    {
        path:'/booking',
        handler: bookingRouter
    },
    {
        path:'/doctor',
        handler: doctorRouter
    },
    {
        path: '/',
        handler: (req, res) => {
            res.send('home page');
        }

    },
]

module.exports = (app) => {
    routers.forEach(router => {
        if(router.path === '/'){
            app.get(router.path, router.handler);
        }else{
        app.use(router.path, router.handler);
        }
    });
}