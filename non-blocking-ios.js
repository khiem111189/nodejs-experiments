// console.log("hello!");
var stdin = process.openStdin();

var currentValue = "Cool";

stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    console.log("you entered: [" + d.toString().trim() + "]");
    currentValue = d.toString().trim();
  });

// How to use Timeout here!?
setInterval(function() {
    console.log(currentValue);
}, 1000);

// How to listen to change of a file!??