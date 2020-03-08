const orm = require("../config/orm");

burgers = {
    getBurgers: function(cb){
        orm.selectAll("burgers", data=>{
            cb(data);
        })
    },
    devourBurger: function(id, cb){
        orm.updateOne("burgers",{devoured:true},id,data=>{
            cb(data);
        })
    },
    addBurger: function(burger, cb){
        orm.insertOne("burgers",burger,data=>{
            cb(data);
        })
    }

}

module.exports = burgers;
