const express = require("express");
const mongoose = require("mongoose");
import User from "./model/UserModel.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect("mongodb://127.0.0.1:27017/test")
    .then(() => {
        console.log("DB connection successful");
    })
    .catch((err) => {
        console.error("DB connection error:", err);
    });

    app.get("/",(req,res)=>{
      res.json({
        message : "ok"

      })
    })
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
