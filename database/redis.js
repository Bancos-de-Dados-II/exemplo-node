const redis = require('redis');
const client = redis.createClient();

conectar();

async function conectar(){
    client.on('error', err => console.log('Redis Client Error', err));
    await client.connect();
    console.log(await client.ping());
}

module.exports = client;