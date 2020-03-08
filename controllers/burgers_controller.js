const burger = require("../models/burger");
const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    burger.getBurgers(data => {
        console.log(data);
       let burgers = {
           burgers:data
       } 
        res.render("index", burgers);

    });
});

router.get("/api/burgers" ,(req,res)=>{
    burger.getBurgers(data=>{res.json(data)});
})

router.get("/api/devour/:id",(req,res)=>{
    burger.devourBurger({id: req.params.id}, data=> {
        res.redirect("/api/burgers")
    });
})

router.post("/api/addburger/",(req,res)=>{

    burger.addBurger(req.body,data =>{
        res.redirect("/api/burgers");
    })
})

module.exports = router;