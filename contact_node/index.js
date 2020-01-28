const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/Contact_db", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    console.log("Mongodb connected mongodb://localhost:27017/Contact_db")
  )
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/contact", require("./routes/contact.routes"));

app.listen(3200, () => console.log("Server Listening on 3200"));
