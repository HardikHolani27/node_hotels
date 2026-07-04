const express = require('express');
const router = express.Router();
const menu = require('../models/MenuItem');

router.post('/', async(req,res) =>{
  try{
    const data = req.body;
    const newmenu = new menu(data);
    const response = await newmenu.save();
    console.log('data saved');
    res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

router.get('/', async(req, res) =>{
  try{
    const data = await menu.find();
    console.log('data fetched');
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

router.put('/:id', async(req, res) =>{
  try{
  const menuid = req.params.id;
  const updatedMenuData = req.body;

  const response = await menu.findByIdAndUpdate(menuid, updatedMenuData, {
    new: true,
    runValidators: true,
  })

  if(!response) {
    return res.status(404).json({error: 'Menu not found' });
  }

  console.log('data updated');
  res.status(200).json(response);
}catch(err){
  console.log(err);
  res.status(500).json({error: 'Internal Server Error'});
}
})

router.delete('/:id', async(req, res) =>{
  try{
  const menuid = req.params.id;

  const response = await menu.findByIdAndDelete(menuid);
  if(!response){
    return res.status(404).json({error: 'Menu not found'});
  }
  console.log('data delete');
  res.status(200).json({message: 'person deleted successfully'});
}catch(err){
  console.log(err);
  res.status(500).json({error: 'Internal Server Error'});
}
})

module.exports = router;