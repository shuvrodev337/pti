const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
app.use(cors());

const foods = require("./data/foods.json")

app.get("/", (req, res) => {
    res.send("Hello World! pti. Server is running!!");
  });
app.get("/all-foods", (req, res) => {
    res.send(foods);
  });


  app.listen(port, () => {
    console.log(`Food pti. app listening on port ${port}`);
  });