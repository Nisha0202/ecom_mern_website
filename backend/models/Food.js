
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

    const foodSchema = new mongoose.Schema({
      CategoryName: String,
      name: String,
      img: String,
      options: [{
        medium: String,
        large: String,
      }],
      description: String
    });
 
const Food = mongoose.model('food_items', foodSchema);

 module.exports = Food;
          










