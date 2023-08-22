const express=require('express')

const app=express()
const logic=require('./logic')

app.use(express.json())



app.get('/api/menu', async (req, res) => {
    try {
      const menuItems = await MenuItem.find({});
      res.json(menuItems);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }); 
app.listen(8000,()=>{
    console.log("server started at 8000");
}) 


