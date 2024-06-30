const express = require("express")

const router = express.Router()

const shortURL = require('../models/urlSchema')

const QRCode = require("qrcode")

router.get('/', async(req,res)=>{
const shorturls = await shortURL.find()
//res.send("trying")
    res.render('index',{shorturls:shorturls})
  })

router.post('/shortUrls',async(req,res)=>{
   try{
    const url = req.body.full
    const qrcode = await QRCode.toDataURL(url);
    const newShortURL = new shortURL({
        full:url,
        qrcode:qrcode
    })
    await newShortURL.save()
    console.log("new short url is: ", newShortURL);
    res.redirect('/')
   }
   catch(err){
        console.log(err);
   }
})

router.get('/:shortUrl', async(req,res)=>{
    const shortUrl = await shortURL.findOne({short:req.params.shortUrl})
    if(shortUrl == null){
        return res.sendStatus(404)
    }
    await shortUrl.clicks++;
    shortUrl.save()
    res.redirect(shortUrl.full)
})

/*router.get('/generateQR', async(req,res)=>{
    try{
        const url = req.body.url;
        const qrcodeImage = await QRCode.toDataURL(url);
        res.send(`<img src= "${qrcodeImage}" alt="QR CODE"/>`)
    }
    catch(err){
          console.log(err);
    }
})*/

router.get('/delete/:id', async(req,res)=>{
    const id = req.params.id
    try{
        await shortURL.deleteOne({_id : id})
        console.log('Deleted');
        res.redirect('/')
    }
    catch(err){
        console.log(err)
    }
})


 module.exports =router