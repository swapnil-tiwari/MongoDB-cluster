// require('./db_init');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dawnmist:coolswapnil1@dmdatabase-snyy6.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
global.collection=null
global.connection=null;
global.db=null;
global.collection=null;
client.connect();
async function connect()
{
    await client.connect()
    global.connection=true;
    global.db=client.db('hopeDB')
    console.log("Connected with cluster")
    return
}
async function getCollection(collectionName)
{
    if(!connection) {
        await connect();
    }
    global.collection=client.db('hopeDB').collection(collectionName)
}
async function storeObject(object)
{
    console.log('storing..',object)
    if(!collection)await connect()
    await getCollection('masterUser')
    await collection.insertOne(object)
}

let dawnmist={
    username:'DawnMist',
    id: '110599zdwokuh67',
    key:'5982776464b2533a0bd175fd4ec4bdd5540a6552c50e0e7501a5109b709cf6c1',
    alias:'Swapnil Tiwari',
    permission:'alltrue',
    level:'master'

}
storeObject(dawnmist)
