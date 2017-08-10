express = require('express');
const app = express();
const faker = require('faker');

var ncp = require("copy-paste");
var colors = require('colors');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

app.use('/', function( req, res, next ) {

	let data = "";

	for (let i = 0; i < 100; i++) {
		data += faker.random.number() + "<br>";
	}

	res.send(data);
})

const hostName = "localhost";
const hostPort = 5000;
const hostUrl = "http://" + hostName + ":" + hostPort;

console.log("\n");
console.log( hostUrl );
ncp.copy (hostUrl);
console.log( "Copied to clipboard!".green);

app.listen(5000);
