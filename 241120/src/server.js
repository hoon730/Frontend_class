import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localMiddleware } from "./middlewares";

const app = express();
const session = require("express-session");
const logger = morgan("dev");
const MongoStore = require("connect-mongo");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

// console.log(process.env.COOKIE_SECRET);

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 20000,
    },
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

// app.use((req, res, next) => {
//   req.sessionStore.all((error, session) => {
//     next();
//   });
// });

app.use(localMiddleware);
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
