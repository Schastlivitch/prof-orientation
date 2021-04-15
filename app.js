const express = require("express");
const mongoose = require("mongoose");
const sessions = require("express-session");
const MongoStore = require("connect-mongo");
const path = require("path");

const app = express();

const indexRouter = require("./routes/index");
const authRouter = require('./routes/authentification')
const signUpRouter = require('./routes/signup')

app.set("view engine", "hbs");
app.set("cookieName", "sid");

const secretKey =
  "2ef080cd6a761ae6d3e97ecdcf62614e76bd6b0f2391169e42cff52e0db6c25b49788c5a0ec2e18469b38e41806ce9f2646a267b203ed95a880223f6b82b4660";

app.use(
  sessions({
    name: app.get("cookieName"),
    secret: secretKey,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/profOrientation", // адрессссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссссс
    }),
    cookie: {
      httpOnly: true,
      maxAge: 86400 * 1e3,
    },
  })
);

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


// Запуск сервака с монго
app.listen(3000, () => {
  console.log("Его борьба");
});
// НАПИШИ АДРЕС-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С
mongoose.connect(
  "mongodb://localhost:27017/profOrientation",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Hello there, motherbase");
  }
);
