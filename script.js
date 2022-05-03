
const {MongoClient} = require ('mongodb');
const readline = require("readline");
const database = "helloworld";
const url = "";
const client = new MongoClient(url);

async function connect(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('hello');
}


function main(){
    
    
}

main();
