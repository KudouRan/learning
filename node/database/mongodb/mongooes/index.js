const mongoose = require('mongoose');


//特别注意这里的验证方式
mongoose.connect('mongodb://catlair:123456@localhost:27017/cs?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Cat = mongoose.model('Cat', {
  name: String
});

const kitty = new Cat({
  name: 'Zildjian'
});


kitty.save().then(() => console.log('meow')).catch(console.log);