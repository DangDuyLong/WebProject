import bodyParser from "body-parser";
import express from "express";
import viewEngine from "./config/ViewEngine";
import connectDB from './config/connectDB';
import initWebRoutes from './route/wed';

require('dotenv').config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 8089;
//Port == undefined => port = 
app.listen(port, () => {

    console.log("Backend Nodejs is running on the port: " + port)
})