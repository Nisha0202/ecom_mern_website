const mongoose = require('mongoose');
const pass = 'url';
const Food = require('./models/Food');
const connectToMongo = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(pass);
    console.log('Connected to MongoDB successfully!');
    const categorySchema = new mongoose.Schema({
      CategoryName: String,
    });
//  const Food = mongoose.model('food_items', foodSchema);

    
    const Category = mongoose.model('food_categories', categorySchema);
    try {
      const foodItems = await Food.find({});
      global.food_items = foodItems;
      // console.log(global.food_items);
    } catch (foodError) {
      console.log('Error fetching food items:', foodError);
    }
    try {
      const categories = await Category.find({});
      global.food_category = categories;
      // console.log(global.food_category);
    } catch (categoryError) {
      console.log('Error fetching food categories:', categoryError);  }
  } catch (error) {
    console.log('MongoDB connection error:', error);}
};

module.exports = connectToMongo;












