const express = require('express');
const router = express.Router();
const multer = require('multer');
const Food = require('../models/Food');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.resolve(__dirname, 'uploads');
    if (fs.existsSync(uploadPath)) {
      cb(null, uploadPath);
    } else {
      console.error('Upload path does not exist or is not accessible');
      cb(new Error('Upload path does not exist or is not accessible'));
    }
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, uniqueSuffix + extension);
  }
});
const upload = multer({ storage });
// Route handling function
const uploadFoodItem = async (req, res) => {
  try {
    const formData = req.body;
    // Create a new food item document
    const newFoodItem = new Food({
      CategoryName: formData.catname,
      name: formData.name,
      img: req.file.filename, // Store the generated file name in the "img" field
      options: [{ medium: formData.price1, large: formData.price2 }],
      description: formData.description
    });
    const savedFoodItem = await newFoodItem.save();
    console.log('Food item saved:', savedFoodItem);
    res.status(200).json({ message: 'Food item saved successfully' });
  } catch (error) {
    console.log('Error saving food item:', error);
    res.status(500).json({ error: 'Failed to save food item' });
  }
};
// Route definition
router.post('/upload', upload.single('image'), uploadFoodItem);

module.exports = router;

