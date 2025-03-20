const express = require("express")
const morgan = require("morgan")
const app = express()
const cors = require("cors")
const path = require("path")

// body parser
app.use(express.json({}))
app.use(express.urlencoded({extended:false}))

app.use(morgan("dev"))
app.use(cors())

// set engine for html file 

// app.set("view engine","html")
app. set ( 'view engine' , 'ejs' ); 
app. set ( 'views' , path. join (__dirname, 'view' )); 
app.use(express.static (path. join (__dirname, 'public' ))); 


app.use("/api/v1",require("./routes"))

// slash route home route
app.use("*",(req,res)=>{
    res.render('index')
})

module.exports = app