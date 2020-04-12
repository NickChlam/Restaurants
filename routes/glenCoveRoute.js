const Rest = require('../controllers/glenCoveController')
module.exports = function(app) {

    app.route('/restaurants')
        .get(Rest.getRestaurants)


    app.route('/restaurants/name/:name')
        .get(Rest.getBusiness)

    app.route('/restaurants/type/:type')
        .get(Rest.getRestaurantsByType)

    app.route('/restaurants/name')
        .get(Rest.notFound)

    app.route('/restaurants/open')
        .get(Rest.getOpenRestaurants)
        
} 