const express = require("express")
const mongoose = require("mongoose")
const QRCode = require("qrcode")
const path = require("path")
const PORT = 8080;
const app = express();
const urlRouter = require('./routes/urlRoute.js')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://127.0.0.1:27017/url')
.then(()=> console.log("connected to mongodb"))
.catch((err)=> console.log(err))

// const db = mongoose.connection

app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use('/', urlRouter)
 

app.listen(PORT,()=>{
    console.log(`server is running at: ${PORT}`);
})