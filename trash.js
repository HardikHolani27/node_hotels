// app.get('/idli', (req, res) => {
//     var customized_idli = {
//         name: 'tatte idli',
//         size: '5 cm radius',
//         is_sambhar: false,
//         is_chutney: true,
//         is_ghee: true
//     }
//     res.send(customized_idli);
// })

// app.get('/mh', (req, res) => {
//     res.send('welcome to maharashtra');
// })

// app.get('/pjb', (req, res) => {
//     res.send('welcome to punjab');
// })

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

  //Save the new person to the database, save fn callback return karta hai , callback me vo error aur person return karta hai
  // newPerson.save((error, savedPerson) =>{
  //   if(error){
  //     console.log('Error saving person:', error); //ye message display karna padega
  //     res.status(500).json({error: 'Internal server error'}) //user/person ko response bhi share karege , ye 500 is error code, basically kuch codes are already defined for some common errors 
  //   }else{
  //     console.log('data saved successfully');
  //     res.status(200).json(savedPerson);
  //   }
  // })
  //so ye callback fn pehle use kiye jaaate the , yes we learned but now async await use hota, await me thoda wait/delay rehta h coz say process jisme data fetch hota h uske liye wait krna pdega na ki bina fetching ke aage badhega