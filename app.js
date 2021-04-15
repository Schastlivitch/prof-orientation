const express = require("express");
const mongoose = require("mongoose");
const sessions = require("express-session");
const MongoStore = require("connect-mongo");
const path = require("path");
const app = express();

const indexRouter = require("./routes/index");
const authRouter = require('./routes/auth')
const signUpRouter = require('./routes/signup')
const logoutRouter = require('./routes/logOut')
const contentRouter = require('./routes/content')
const lkRouter = require('./routes/lk')
const voteRouter = require('./routes/vote')
const favRouter = require('./routes/favourite')


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
app.listen(3000, () => {
  console.log("Его борьба");
});
// НАПИШИ АДРЕС-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С-С
mongoose.connect(
  "mongodb://localhost:27017/profOrientation",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  () => {
    console.log("Hello there, motherbase");
  }
);
