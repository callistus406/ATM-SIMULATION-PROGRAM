const express = require("express");
const app = express();
const dotenv = require("dotenv");
const ans = require("./Routes/apis/appRoutes");
const cors = require("cors");

// middle wares
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);



app.use(require("./Routes/apis/appRoutes"));
// const PORT = 3200;

app.listen(process.env.PORT, function () {
  console.log(process.env.PORT);
  console.log("CORS-enabled web server listening on port " + process.env.PORT);
});
