const glenCove = require('../models/glenCoveModel')

exports.getRestaurants = async function(req, res) {
    
    const restaurants = await glenCove.find()
        .select('-_id')
        .lean()
    
    if(!restaurants.length) return res.status(204).send({"error": true, "message": 'no data '})
    return res.status(200).send(restaurants)

}