const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("nomgoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/netflix", {
    useNewurlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection Successfull");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
