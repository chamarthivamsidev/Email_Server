const express = require("express");

const app = express();

app.get("/", function (req, res) {
  try {
    return res.status(200).send({ message: "Hello Welcome" });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

app.post("/form", function (req, res) {
  try {
    return res.status(200).send({ message: "Hello" });
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  try {
    console.log(`listening on port ${port}`);
  } catch (error) {
    console.log(error);
  }
});
