const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const apiRouter = require("./routes/api");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/v1", apiRouter);

app.get("/*path", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
module.exports = app;
