const express=require('express')

const app=express()

const db=require('./util/database')
const userRoute=require('./routes/userdetails')

const bodyParser=require('body-parser')
const sequelize = require('./util/database')

var cors=require('cors')

app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}))

app.use(userRoute)

sequelize
.sync()
.then(user =>{
    app.listen(3007)
})
.catch(err=>{
    console.log(err)
})

