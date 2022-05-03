
const {MongoClient} = require ('mongodb');
const readline = require("readline");
const database = "helloworld";
const url = "mongodb+srv://vishwajeet:5824sj70c1ygYT9R@db-mongodb-blr1-30794-dc36d27e.mongo.ondigitalocean.com/videobase?authSource=admin&replicaSet=db-mongodb-blr1-30794&tls=true&tlsCAFile=ca-certificate.crt";
const client = new MongoClient(url);

async function connect(){
    let result = await client.connect();
    let db = result.db(database);
    let collection = db.collection('hello');
}


function main(){
    
    
}

main();
