const express = require("express");
var compression = require("compression");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(compression());
app.use(express.static(path.join(__dirname, "build")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server running on port" + PORT);
});
