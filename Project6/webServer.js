'use strict';

/*
 * A simple Node.js program for exporting the current working directory via a webserver listing
 * on a hard code (see portno below) port. To start the webserver run the command:
 *    node webServer.js
 *
 * Note that anyone able to connect to localhost:3001 will be able to fetch any file accessible
 * to the current user in the current directory or any of its children.
 */

/* jshint node: true */

const config = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

app.use(session({secret: config.parsed.SECRET_KEY, resave: false, saveUninitialized: false}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://cse4050:jacobdankel@cluster0.c73v6qn.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on("open", function (){
  console.log("DB connected successfully");
});

app.use(cors({
  preflightContinue: true,
  credentials: true,
}));

app.use(express.json());
app.set('views','/views');
app.set('view engine', 'pug');

// const webRoutes = require('./routes/web.js');
// const apiRoutes = require('./routes/api.js');
// const graphqlRoutes = require('./routes/graphql.js');
// const sampleRoutes = require('./routes/sample.js');

app.use(express.static(__dirname));

app.use(
  session({
    secret: config.parsed.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    proxy: true,
    cookie: {
      secure: true,
      httpOnly: false,
      sansSite: 'none',
    }
  })
);

// app.use('./tasks', webRoutes);
// app.use('./api', apiRoutes);
// app.use('./graphql', graphqlRoutes);
// app.use('./sample', sampleRoutes);

