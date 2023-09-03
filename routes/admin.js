const path=require('path');

const express=require('express');

const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    console.log("incoming")
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
});

//POST

router.post('/add-product',(req,res,next)=>{
    res.redirect('/');
});


module.exports=router;