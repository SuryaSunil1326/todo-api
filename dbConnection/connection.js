const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const connection = {};
var dbObject ={};
const dbName='testDB';


connection.connect = callback =>{
    MongoClient.connect(url,{useNewUrlParser:true},{useUnifiedTopology: true},(err,database)=>{
        if(err){
            callback('Error while connecting db connection !!')
        }else{
            dbObject = database.db(dbName);
            callback(null,'Database Connected !!')
        }
    });
}

connection.getDb = ()=>{
    if(dbObject){
        return dbObject;
    }
}

connection.close = ()=>{};

module.exports = connection;

