const glenCove = require('../models/glenCoveModel')

exports.getRestaurants = async function(req, res) {
    // ?page=2&size=10
    let pageNumber = req.query.page
    let pageSize = req.query.size
    
    
    try {
        pageNumber = parseInt(req.query.page)
        pageSize = parseInt(req.query.size)
    }
    catch (err) {
        // logg error and return message 
        return res.status(400).send({"error": "query param's must be numbers"})
    }

    const restaurants = await glenCove.find()
        .select('-_id -__v')
        .limit(pageSize)
        .skip((pageNumber - 1)  * pageSize)
        .sort({BusinessName: 1 })
        .lean()
    
    if(!restaurants.length) return res.status(204).send({"error": true, "message": 'no data '})
    return res.status(200).send(restaurants)

}

exports.getOpenRestaurants = async function(req, res) {
    
    pageNumber = parseInt(req.query.page)
    pageSize = parseInt(req.query.size)

    const restaurants = await glenCove.find({
        BusinessName: { "$regex": name, "$options": "i" }
        })
        .select('-_id -__v')
        .limit(pageSize)
        .skip((pageNumber -1) * pageSize)
        .sort({BusinessName: 1 })
        .lean()

    
       
        if(!restaurants.length) return res.status(204).send({"error": true, "message": 'no data '})
        return res.status(200).send(restaurants)

}

exports.getBusiness = async function(req, res) {
    name = req.params.name
   
    pageNumber = parseInt(req.query.page)
    pageSize = parseInt(req.query.size)

    const restaurants = await glenCove.find({
        BusinessName: { "$regex": name, "$options": "i" }
        })
        .select('-_id -__v')
        .limit(pageSize)
        .skip((pageNumber -1) * pageSize)
        .sort({BusinessName: 1 })
        .lean()

    
       
        if(!restaurants.length) return res.status(204).send({"error": true, "message": 'no data '})
        return res.status(200).send(restaurants)
}

exports.getRestaurantsByType = async function(req, res) {
    type = req.params.type
    let pageNumber = parseInt(req.query.page)
    let pageSize = parseInt(req.query.size)

    // const totalRec = await glenCove.find({
    //     BusinessName: { "$regex": type, "$options": "i" }
    //     }, (err, res) => {
    //         console.log(res.length)
    //     })
    //     .select('-_id -__v')
    //     .lean()

    const restaurants = await glenCove.find({
        Category: { "$regex": type, "$options": "i" }
        })
        .select('-_id -__v')
        .limit(pageSize)
        .skip((pageNumber -1) * pageSize)
        .sort({BusinessName: 1 })
        .lean()
        
        //restaurants.unshift({"count": restaurants.length})
        if(!restaurants.length) return res.status(204).send({"error": true, "message": 'no data '})
        return res.status(200).send(restaurants)
}