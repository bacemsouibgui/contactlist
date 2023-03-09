//importation express
const express= require("express")
//instance express
const app= express()

// middleware
app.use(express.json());

// import connectDB
const connectDB= require('./config/connectDB')
connectDB()


// creation de port
const port= 5000
app.listen(port, err=>{
    err?console.log("erreur"): console.log(`server is running on port ${port}`)
})
