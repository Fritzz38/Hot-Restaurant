
// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//sets up the Express App
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Holds Reservation Data
var tables = [];
var numOfReservations = 0;
let sampleTable1 = {
	name: "Devren",
	email: "devrenfreestone@gmail.com",
	phone: "480-560-1995",
	partySize: 4
};

let sampleTable2 = {
	name: "John",
	email: "jpsilkjr86@gmail.com",
	phone: "480-388-5693",
	partySize: 5
};




function addNewTable(newTable) {
	tables.push(newTable);
	numOfReservations = tables.length;
}

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./restaurant-html/home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "./restaurant-html/reserve.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "./restaurant-html/table.html"));
});

app.get("/all", function(req, res) {
  res.json(tables);
});

addNewTable(sampleTable1);
addNewTable(sampleTable2);
console.log(tables);
console.log(numOfReservations);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});