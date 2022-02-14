const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlenconded({ extended: true }));

app.listen(3000);
