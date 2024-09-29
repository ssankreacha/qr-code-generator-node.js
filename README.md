QR Code Generator

This simple application uses the Node.js framework; executed via the Visual Code Terminal. It is important to have Node.js installed on your computer before executing this code.

1. To install Node.js: https://nodejs.org/en
2. After installation, restart your computer and use 'node --version' via the Terminal to check the current version of Node.js. This is confirmation of installation.
3. Download/copy & paste the index.js, and package.json files into your Visual Studio Code, create a new folder and move the files into that folder.
4. Then use 'cd' command to choose the correct directory your files are based in. Follow up with ls (mac) / dir (Windows) to cofirm your files are inside that directory.
5. Via the Visual Studio Code Terminal, initialise Node.js by running 'npm init'. Skip most (by pressing Enter) fields except: Author, Description & Name. This will create your own Package.json file for your program.
7. Install the relevant packages via the Terminal by running:
  npm install inquirer
  npm install qr-image
You should have gained a node modules folder inside your previously created folder (step 3).
9. Finally, run 'node index.js' via the Terminal, and follow the prompts of the program.

If the program ran successfully, you'll receive a QR code for the URL entered, and a .txt file including the URL you entered!
