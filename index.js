const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const cors = require("koa2-cors");
const router = new Router();
const api = require("./api");

const mongoose = require("mongoose");
const bodyParser = require("koa-bodyparser");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((db) => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

app.use(bodyParser());

router.use("/api", api.routes());
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

router.get("/", (ctx, next) => {
  ctx.body = "This is API Page for LoL MBTI Service.";
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Koa server is listening to port 4000");
});
