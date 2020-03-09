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

router.put("/api/devour/:id",(req,res)=>{
    console.log("the id sent was"+ req.params.id);
    burger.devourBurger({id: req.params.id}, data=> {
        res.status("200")
        res.send("success");
    });
})

router.post("/api/addburger/",(req,res)=>{
    burger.addBurger(req.body,data =>{
        res.status("200")
        res.send("success");
    })
})

module.exports = router;