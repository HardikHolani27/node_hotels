const express = require('express');
const router = express.Router();
const person = require('./../models/person');

//POST route to add a person
router.post('/', async(req, res) =>{
try {
  const data = req.body //Assuming the request body contains the person data

  //Create a new person document using the Mongoose model
  const newPerson = new person(data); //jo hum 'newPerson' doc banare hai , usme saara info prefilled hogaya 'data' me se , jo upar data =req.body banaya h, else humko sab seperately karna padta like newPerson.name = data.name

  //save the new person to database
  const response = await newPerson.save(); //save krne ke pehle thoda wait kiya, jab tak ki vo save na hojaye, and agar yaha fail hojata tohb vo sidha catch block me chale jaata
  console.log('data saved');
  res.status(200).json(response);

}
catch(err){
  console.log(err);
  res.status(500).json({error: 'Internal Server Error'});
}
})

// //GET METHOD
router.get('/', async(req, res) =>{
  try{
    const data = await person.find();
    console.log('data fetched');
    res.status(200).json(data);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

//parameterized api calls
router.get('/:workType', async(req, res) =>{
  try{
    const workType = req.params.workType; //Extract the work type from URL parameter, workType is variable/parameter so we doin req.params
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
      const response = await person.find({work: workType});
      console.log('response fetched');
      res.status(200).json(response);
    }else{
      res.status(404).json({error: 'Invalid work type'});
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

//update operation
router.put('/:id', async(req, res) =>{ //vo :/id variable hai, usko kuch bhi naam de sakte, but its basically the id jo mongodb provide krta hai
    try{
        const personId = req.params.id; //Extract the id from the URL parameter , id hum parameter ke through send karre hai, client bhejega we mean
        const updatedPersonData = req.body; //updated data from the person , data hum json ke through send karre hai

        const response = await person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, //Return the updated document
            runValidators: true, //Run Mongoose validation, jo humne validations lga rakhe hai na personn me , like ye required hona, ye work hona, vo sab check karta hai ye...
        })

        if (!response) {
            return res.status(404).json({error: 'Person not found' });
        }

        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

//delete operation
router.delete('/:id', async (req, res) =>{
  try{
    const personId = req.params.id; //Extract the person's ID from the URL parameter

    //Assuming you have a person model
    const response = await person.findByIdAndDelete(personId);
    if(!response) {
      return res.status(404).json({ error: 'Person not found'});
    }
    console.log('data delete');
    res.status(200).json({message: 'person deleted successfully'});
  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal Server Error'})
  }
})

module.exports = router;