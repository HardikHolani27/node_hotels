//callback fn
// function callback(){
//     console.log('now adding is sucessful complete');
// }

// const add = function(a, b, callback){
//     var result = a+b;
//     console.log('result: '+result);
//     callback();
// }

// add(2,4, callback);

//fs, os
// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hi ' + user.username + '!', ()=>{
//     console.log('file is created');
// })

//import of function
// const notes = require('./notes.js')
// console.log('server file is available');

// var age = notes.age;

// var result = notes.addNumber(age+18, 20);

// console.log(age);
// console.log(result);

//express
const express = require('express');
const app = express();
// const person = require('./models/person');
// const MenuItem = require('./models/MenuItem');
require('dotenv').config();
const db = require('./db');


const bodyParser = require('body-parser');
app.use(bodyParser.json());  //abhi we are providing data in json form isliye we are using bodyParser.json, ye karega kya json data ko uthayega , usko object me pass/convert karega and saara data req.body me store kar dega
const PORT = process.env.PORT || 3000; //iska mtlb kya hua - agr process.env.PORT me port ka value available hua toh vo usko use karega else 3000 ko if nahi raha toh

app.get('/', (req, res) => {
  res.send('Welcome to our Hotel')
})

//POST route to add a person
// app.post('/person', async(req, res) =>{
// try {
//   const data = req.body //Assuming the request body contains the person data

//   //Create a new person document using the Mongoose model
//   const newPerson = new person(data); //jo hum 'newPerson' doc banare hai , usme saara info prefilled hogaya 'data' me se , jo upar data =req.body banaya h, else humko sab seperately karna padta like newPerson.name = data.name

//   //save the new person to database
//   const response = await newPerson.save(); //save krne ke pehle thoda wait kiya, jab tak ki vo save na hojaye, and agar yaha fail hojata tohb vo sidha catch block me chale jaata
//   console.log('data saved');
//   res.status(200).json(response);

// }
// catch(err){
//   console.log(err);
//   res.status(500).json({error: 'Internal Server Error'});
// }
// })

// //GET METHOD
// app.get('/person', async(req, res) =>{
//   try{
//     const data = await person.find();
//     console.log('data fetched');
//     res.status(200).json(data);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error: 'Internal Server Error'});
//   }
// })

//post and get method for menuitem url
// app.post('/menuitem', async(req,res) =>{
//   try{
//     const data = req.body;
//     const menu = new MenuItem(data);
//     const response = await menu.save();
//     console.log('data saved');
//     res.status(200).json(response);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error: 'Internal Server Error'});
//   }
// })

// app.get('/menuitem', async(req, res) =>{
//   try{
//     const data = await MenuItem.find();
//     console.log('data fetched');
//     res.status(200).json(data);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({error: 'Internal Server Error'});
//   }
// })

//parameterized api calls
// app.get('/person/:workType', async(req, res) =>{
//   try{
//     const workType = req.params.workType; //Extract the work type from URL parameter, workType is variable/parameter so we doin req.params
//     if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
//       const response = await person.find({work: workType});
//       console.log('response fetched');
//       res.status(200).json(response);
//     }else{
//       res.status(404).json({error: 'Invalid work type'});
//     }
//   }catch(err){
//     console.log(err);
//     res.status(500).json({error: 'Internal Server Error'});
//   }
// })

//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

//Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

//vo apan postman me post krte koi url pe toh vo visibly nahi dikhata ki process hogyi so for that we can do this 
// app.post('/person' , (req, res) => {
//     res.send('data is saved');
// })