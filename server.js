require("dotenv").config();

const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/api-routes.js");
const htmlRoutes = require("./routes/html-routes.js");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiRoutes);
app.use(htmlRoutes);

app.use(
  express.static(path.join(__dirname, "public"), {
    index: false,
    extensions: ["html"]
  })
);

app.listen(PORT, function() {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
