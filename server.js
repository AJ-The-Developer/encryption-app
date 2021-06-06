const express = require("express");
const app = express();

app.use(express.static(_dirname + "/dist"));

app.all("*", (req, res) => {
  res.status(200).sendFile(_dirname + "/dist/index.html");
});

app.listen(process.env.PORT || 4200);
