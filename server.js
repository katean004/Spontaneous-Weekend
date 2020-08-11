var express = require("express");
var foodRoutes = require("./controllers/foods_controller");
var movieRoutes = require("./controllers/movies_controller");
var parkRoutes = require("./controllers/parks_controller");
var app = express();

PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// This might need to be edited to be cleaner
app.use(foodRoutes);
app.use(movieRoutes);
app.use(parkRoutes);
// We can uncommoent this if we want to use handlebars
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});