const redis = require('redis');

const client = redis.createClient();

client.on("error", function (error) {
  console.error(error);
});

client.set('key', "value", redis.print);
client.get("key", redis.print);

//设置周期为20S
client.expire('key', 20, (err, value) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(value);
})

setInterval(() => {
  client.ttl("key", (err, value) => {
    console.log('-- -- -- -- -- --');
    if (err) {
      console.log(err);
      return;
    }
    console.log(value); //生命时间,过期返回-2,永久返回-1
  })
}, 5000);