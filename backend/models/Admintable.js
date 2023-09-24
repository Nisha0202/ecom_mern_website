const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AdminSchema = new Schema({
  orderNo: {
    type: Number,
    required: false
   
  },
  email: {
    type: String,
    required: true
  },
  totalprice: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  deliveryStatus: {
    type: Boolean,
    default: false
  }
});


const Admintable = mongoose.model('Admintable', AdminSchema);

module.exports = Admintable;
