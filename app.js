const express = require("express");
const mongoose = require("mongoose");
const sessions = require("express-session");
const MongoStore = require("connect-mongo");
const path = require("path");
const app = express();
require('dotenv').config()

const indexRouter = require("./routes/index");
const authRouter = require('./routes/auth')
const signUpRouter = require('./routes/signup')
const logoutRouter = require('./routes/logOut')
const contentRouter = require('./routes/content')
const lkRouter = require('./routes/lk')
const voteRouter = require('./routes/vote')
const favRouter = require('./routes/favourite')
const MongoClient = require('mongodb').MongoClient;
const port = process.env.PORT
const dbPath = process.env.DB_HOST + process.env.DB_PORT + process.env.DB_NAME
const secretKey = process.env.KEY
const uri = process.env.DB_ATLAS_PATH

app.set("view engine", "hbs");
app.set("cookieName", "sid");


app.use(
  sessions({
    name: app.get("cookieName"),
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: uri, // адрессссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссс
    }),
    cookie: {
      httpOnly: true,
      maxAge: 86400 * 1e3,
    },
  })
);

app.use(async (req, res, next) => {
  res.locals.nick = req.session?.user?.nick;
   next();
 });

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//
//
//
//
//
app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/signup', signUpRouter)
app.use('/logout', logoutRouter)
app.use('/lk', lkRouter)
app.use('/vote', voteRouter)
app.use('/fav', favRouter)
app.use('/', contentRouter)



// Запуск сервака с монго
app.listen(port, () => {
  console.log("Боже, царя храни");
});
// НАПИШИ АДРЕС-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  () => {
    console.log("Hello there, motherbase");
  }
);

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
