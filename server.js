const express = require("express");
const isAtTime = require("./middleware/isAtTime");
const app = express();
//middleware global to read the JSON type
app.use(express.json());
//middleware global to be at time
app.use(isAtTime);
app.use(express.static("views"));

// app.get("/styles/style.css", (req, res) => {
//   res.sendFile(__dirname + "/styles/style.css");
// });

const PORT = 8000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("server is running")
);
