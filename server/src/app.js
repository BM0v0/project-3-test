/* eslint-plugin-disable */
console.log("Hello world!");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors()); // security risk

app.get("/status", (req, res) => { 
	res.send({
		message: "hello bro"
	});
});
/*eslint-disable*/
app.listen(process.env.PORT || 8081);
