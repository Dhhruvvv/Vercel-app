const sharp = require('sharp');

// Fetch the names from Firebase and store it in list_names
// Change these line according to your need
let list_names = ["Nitin Billa"];

for (let index = 0; index < list_names.length; index++) {
  let name = list_names[index];

  // Read the image
  sharp('DJSCE_temp.jpg')
  .toBuffer()
  .then(data => {
      // Get the size of the text
      let textSize = sharp(data).metadata();
      let text_width = textSize.width;
      let text_height = textSize.height;

      // Calculate the center position of the text
      let x = (text_width - textSize.width) / 2;
      let y = 3200; // y-coordinate is fixed

      // Draw the text
      sharp(data)
      .composite([{
          input: Buffer.from(`<svg><text x="${x}" y="${y}" font-size="6" fill="#3e6a70">${name}</text></svg>`),
          gravity: 'center'
      }])
      .toFile(`Certificates${name}.jpg`, (err, info) => {
          if (err) console.log(err);
          console.log('Processing with Certificate with index ' + (index + 1));
      });
  })
  .catch(err => console.log(err));
}