const express = require('express')
const app = express();
const cors = require('cors')


const flightRoute = require('./router/router')

const port = 4000

app.use(express.json());
// app.use(cookieParser);
app.use(cors())
app.use('/api/v1/flight',flightRoute)

app.get('/', (req, res)=>{
    return res.status(200).json({
        success: true,
        message: 'Your server is up and running ....'
    })
})
app.listen(port,()=>{
    console.log(`Server running at http://${port}/`);
})

module.exports = app