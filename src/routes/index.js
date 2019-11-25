const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    // res.sendFile('C://Users/FELIX RAMOS/Desktop/appNode/src/views/index.html');
    res.render('index.html',{title:'let me love'});
});

router.get('/contact',(req,res)=>{
    res.render('contact.html',{title:'pagina de contacto'});
});

router.get('/informacion',(req,res)=>{
    res.render('informacion.html',{title:'informacion'});
});

module.exports=router;