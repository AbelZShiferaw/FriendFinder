/* creating dependencies
 with different npm packages
*/

// importing "express", "body-parser" and "path" npm packages
var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");


var app = express();

// Sets an initial that we will use in our listener
var PORT = process.env.PORT || 3000;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);


// start listening on the server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});