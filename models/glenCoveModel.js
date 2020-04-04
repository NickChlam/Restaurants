const mongoose = require('mongoose')

const GlenCoveSchema = new mongoose.Schema({
    BusinessName: String,
    Category: String,
    OpenClosed: String,
    Town: String,
    Address: String,
    CurrentHours: String,
    HowToOrder: String,
    HowToGetIt: String,
    Phone: String,
    Menu: String,
    DeliveryLink: String,
    PaymentsAccepted: String,
    Specials: String,
    Website: String,
    Email: String,
    Facebook: String,
    Instagram: String,
    Twitter: String
})

module.exports = GlenCove = mongoose.model('GlenCove', GlenCoveSchema); 