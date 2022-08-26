var express = require('express')

var app = express()
const cors=require('cors')
app.use(express.json())
app.use(cors);
const cookieParser=require("cookie-parser")
const microroutes = require('../micro_routes/micromediroute')

app.use(cookieParser())

microroutes(app)
app.listen(5055, function() {
    console.log("server started")
})

