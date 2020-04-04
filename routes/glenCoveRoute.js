const Rest = require('../controllers/glenCoveController')
module.exports = function(app) {

    app.route('/restaurants')
        .get(Rest.getRestaurants)

    app.route('/restaurant/:business')
        //.get(Games.getWeek)
        
}