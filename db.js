const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/sidebar')

const menuItemSchema = new mongoose.Schema({
    name: String,
    children: [menuItemSchema], 
  });
  
  const MenuItem = mongoose.model('MenuItem', menuItemSchema);