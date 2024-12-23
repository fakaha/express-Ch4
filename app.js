require("dotenv").config();
const express = require("express");
const app = express();
const { port } = process.env;

const v1Router = require("./routes/v1");

app.use(express.json());
app.use("/api/v1", v1Router);

app.use((req, res, next) => {
  res.status(404).json({
    status: false,
    message: "Not Found!",
    data: null,
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    status: false,
    message: "Internal Server Error!",
    data: err.message,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
