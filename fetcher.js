const request = require('request');
const fs = require('fs');

const arg = process.argv.slice(2);
//console.log(process.argv);
const URL = arg[0];
const localPath = arg[1];

request(URL, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML



  fs.writeFile('index.html', body, err => { // downloaded content is saved to the local file using the fs.writeFile() method.
    if (err) { //If there is an error while downloading or saving the file
      console.error(err);
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`); //1 character is equal to 1 byte.
    }

  });
});

