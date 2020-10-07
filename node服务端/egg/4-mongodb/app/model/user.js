module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  //用户模型
  const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  });

  return mongoose.model('User', UserSchema);
};
