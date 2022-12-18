const user = require('./routes/userRoutes');

// access route through external route file
module.exports = function (app) {
    app.use('/user',user);    
}