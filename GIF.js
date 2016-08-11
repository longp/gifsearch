var Promise = require('bluebird'),
      mongoose = Promise.promisifyAll(require('mongoose')),
      Schema = mongoose.Schema;

var gifSchema = new Schema({
  id: String,
  text:[String],
  word:[String],
  count:{
    type:Number,
    default: 1
  }
})


var Gif = mongoose.model('Gif', gifSchema)
module.exports = Gif
