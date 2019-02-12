//require the npm's that are used in the to run the server
const express = require("express");
const path = require("path");

const app = express();
// Sets an initial port
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app, path);
require("./app/routing/htmlRoutes")(app, path);

app.listen(PORT, function() {
    console.log(`App listening in PORT ${PORT}.`)
});
