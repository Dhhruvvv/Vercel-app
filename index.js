const express = require('express');
const { addUserDetails} = require('./main.js'); // replace with your contract file path

const fs = require('fs');
const FormData = './Data/johndoe.json'



const app = express();
app.use(express.json());

// Define a route to add user details

app.post('/adduserdetails', async (req, res) => {
    const { useRef} = req.body;
//     const jsonString = JSON.stringify(jsonData, null, 2);
//   console.log()
//   fs.writeFile(`${useRef}.json`, jsonString, (err) => {
//     if (err) {
//       console.error('Error creating JSON file:', err);
//       // Handle the error here
//     } else {
//       console.log(`File '${useRef}.json' created successfully`);
//       // File created successfully
//     }
//   });


  try {
      console.log('iintry')
      await addUserDetails(useRef, FormData);
      res.status(200).send('User details added successfully');
  } catch (error) {
      console.error('Error while adding user details:', error);
      res.status(500).send('Error while adding user details');
  }
});

const port = process.env.PORT ;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
