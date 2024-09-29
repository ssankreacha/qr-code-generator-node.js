QR Code Generator

This simple application uses the Node.js framework; executed via the Visual Code Terminal. It is important to have Node.js installed on your computer before executing this code.

1. To instal Node.js: https://nodejs.org/en
2. After installation, restart your computer and use 'node --version' via the Terminal to check the Version Node.js. This is confirmation of installation.
3. Download / copy & paste the index.js, and package.json files into your Visual Code, and move into a folder.
4. Via the Visual Code Terminal initialise Node.js by running 'npm init'. Skip most (press Enter) fields except: Author, Description & Name. This will create your own Package.json file.
5. Then use 'cd' command to choose the correct directory your files are based in. Follow up with ls (mac) / dir (Windows) to cofirm your files are inside that directory.
6. Instal the relevant packages via the Terminal by running:
  npm install inquirer
  npm install qr-image
8. Finally, run 'node index.js' via the Terminal, and follow the prompts of the program.

If the program ran successfully, you'll receive a QR code for the website entered, and .txt file include the URL you entered!
