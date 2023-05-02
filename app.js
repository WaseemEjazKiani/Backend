const express = require("express")
const calculator= require("./Routes/calculatorRoutes");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json());
app.use(calculator);


module.exports= app