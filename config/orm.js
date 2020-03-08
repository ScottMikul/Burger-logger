const connection = require("./connection");
    
const orm = {
     selectAll: function(tableName, cb){
          connection.query("select * from ??", tableName, (err,data)=>{
               if(err) console.log(err);
               cb(data);
          })
     },
     insertOne: function( tableName, objInserted, cb){
          connection.query("insert into ?? set ?", [tableName, objInserted],(err,data)=>{
               if(err) console.log(err);
               cb(data);
          })

     },
     updateOne: function(tableName, objUpdated, conditionObj, cb){
          connection.query("update ?? set ? where ?", [tableName, objUpdated, conditionObj], (err,data) =>{ 
               if(err) console.log(err);
               cb(data);
          })

     }
}

//testing:
//orm.selectAll("burgers",data=> console.log(data));
//orm.insertOne( "burgers",{burger_name:"cheeseburger",devoured:true}, data=> console.log(data));
//orm.updateOne("burgers", {burger_name:"baconburger"}, {id:1}, data=> {console.log(data)});

module.exports = orm;
