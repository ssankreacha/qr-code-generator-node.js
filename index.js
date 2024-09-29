/* 
PROJECT Description: QR Code Generator

1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Copy & Paste Your URL: '
    }
  ])
  .then(answers => {
    console.log(answers.url);

    // Generate the QR code for the user's input URL and save it as a PNG
    var qr_png = qr.image(answers.url, { type: 'png' });  
    qr_png.pipe(fs.createWriteStream('qr_img.png'));  // Save as 'qr_img.png'

    // Write the URL to a text file called userInput.txt
    fs.writeFile("userInput.txt", answers.url, (err) => {
      if (err) {
        console.error("An error occurred while writing the file:", err);
      } else {
        console.log("URL saved to userInput.txt");
      }
    });
  })
  .catch(error => {         
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("An error occurred:", error);
    }
  });