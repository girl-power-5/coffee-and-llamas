const express = require("express");
const mongoose = require("mongoose");
const routes = require('./routes');
const passportRoutes = require("./passport/passport-routes");
const app = express();
const PORT = process.env.PORT || 3001;
const session = require('express-session');
const passport = require('./passport');
mongoose.Promise = global.Promise;
const MongoStore = require('connect-mongo').default;
require("dotenv").config();

const config = require('./config');

const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Define middleware here
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post('/api/messages', (req, res) => {
  console.log('TWILIO REQ', req.body)
  res.header('Content-Type', 'application/json');
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: req.body.to,
      body: req.body.body
    })
    .then((message) => {
      console.log('MESSAGE SID', message.sid);
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.use('/user', passportRoutes);
app.use(routes);

app.use(
	session({
		secret: 'sweetsesh',
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({
      mongoUrl: 'mongodb://localhost/dbimok'    })
	})
)



// Connect to the Mongo DB
if (process.env.NODE_ENV === "production") {
mongoose.connect(process.env.MONGODB_URI),
{   useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify: false
};
} else {
    mongoose.connect("mongodb://localhost/dbimok"),
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    };
}


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});