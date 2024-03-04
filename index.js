const express = require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const routes=require('./routes/routes')
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors())
// app.use(cors({
//   origin:'http://localhost:3001',
//   methods:['GET','POST','PUT','DELETE'],
//   allowedHeaders:['Content-Type']
// }))
app.use('/', routes); 

const port = 3000
mongoose
.connect(process.env.MONGODBURL)
.then(()=>{
    console.log("App connected to database")
    app.listen(process.env.PORT ||port, () => {
        console.log(`Example app listening on port ${port}`)
    })
})
.catch((error)=>{
    console.log(error)
})
