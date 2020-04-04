const mongoose = require('mongoose');
const csv = require('csv-parser');
const fs = require('fs');

mongoose.connect('mongodb://localhost/Cities')
    .then(() => console.log('connected to mongoDB'))
    .catch( err => console.error('Could not connect to mongo.. ', err))

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

    const GlenCove = mongoose.model('GlenCove', GlenCoveSchema)

    async function createRestarant(rest) {
        const result = await rest.save(); 
        console.log(result)
    }

    // createCourse();

    fs.createReadStream('GlenCove.csv')
        .pipe(csv())
        .on('data', (row) => {
            let GlenCoveData = new GlenCove(row)
            createRestarant(GlenCoveData)
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        });

    