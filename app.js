const http=require('http');

const path=require('path');

const express =require('express');

const app=express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use('/',(req,res,next)=>{
    console.log("hi");
    res.status(404).sendFile(path.join(__dirname,"views","404.html"));
})

const server=http.createServer(app);

server.listen(3000);
