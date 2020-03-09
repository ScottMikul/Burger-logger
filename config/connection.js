const mysql = require("mysql");

const connection;
if(process.env.JAWSDB_URL){
    conenciton = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host:"localhost",
        port:"3306",
        user:"root",
        password:"root",
        database:"burgers_db"
    })
}



connection.connect(err=>{
    if(err) console.log(err);
})

module.exports = connection;