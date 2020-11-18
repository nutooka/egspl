const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShopSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  data: {
    name: String,
    shopType: String,
    imageUrl: String,
    other: {
      address: String,
      webpage: String,
      phone: String
    },
    summaryRating: Number,
    numberOfVotes: Number
  },
  evaluation: {
    comments: [
      {
        _id: Schema.Types.ObjectId,
        evaluatorId: {
          type: Schema.Types.ObjectId,
          ref: 'users'
        },
        evaluatorName: String,
        evaluatorImageUrl: String,
        evaluationDate: Date,
        evaluationRating: Number,
        evaluationComment: String
      }
    ]
  }
});

module.exports = Shop = mongoose.model('shop', ShopSchema);

