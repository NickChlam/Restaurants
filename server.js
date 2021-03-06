  
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

// import routes 
const glennCoveRest = require('./routes/glenCoveRoute')

// connection
let conn = 'mongodb://localhost:27017/Cities';

// database connection 
// TODO : replace connection string with envirnment vars 
mongoose.connect(conn, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected to mongoDB'))
    .catch(err => {
        console.log({'error': 'something went wrong with Mongo Connection'})
        console.log(err)
        process.exit()
     
    })

// middleware
app.use(cors())

// inject express 
glennCoveRest(app)


// config
const port = process.env.PORT || 3001

// listen! 
app.listen( port, () => {
    console.log(`started listening on port ${port}`)
});
