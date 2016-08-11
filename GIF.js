const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const gifSchema = new Schema({
  id: String,
  text:[String],
  word:[String],
  count: Number
})


Const Gif = mongoose.model('Gif', gifSchema)
module.exports = Gif
