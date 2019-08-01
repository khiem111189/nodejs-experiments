// Target of this expriment is utilizing the event-driven programming approach of Nodejs to 
//  have a running server that supports CLI interaction.
// This idea was inspired from a Java Project that supports both web aplication and CLI in the one WAR package: https://github.com/is-already-taken/executable-war-example
 
// Ref from https://stackabuse.com/how-to-start-a-node-server-examples-with-the-most-popular-frameworks/
const http = require('http');

var stdin = process.openStdin();

var currentValue = "Cool";

stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    console.log("you entered: [" + d.toString().trim() + "]");
    currentValue = d.toString().trim();
  });

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
    res.end('Current value in server: '+ currentValue + '!\n');
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');