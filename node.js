// let x=10;
// module.exports=x

// console.log(f)
// let r=f.readFile("txt.txt",{encoding:"utf8"},(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
//     console.log("arrived")
// })
// console.log("finished")
// console.log(process.argv)

// @ts-ignore

const fs = module.require("fs");
const express = module.require("express");
const bcrypt = module.require("bcrypt");
const dotenv = module.require("dotenv");
dotenv.config();
const cors = module.require("cors");
const app = express();
let todosRoutes = module.require("./routes/todos");
let usersRoutes = module.require("./routes/users");
app.use(express.json());
app.use("/todos", todosRoutes);
app.use("/users", usersRoutes);
app.use("*", (req, res, next) => {
  res.json({ message: `you can not access this route ${req.originalUrl}` });
  next();
});
app.use(
  cors({
    origin: "*",
  })
);
// app.use("/todos/count",todosRoutes)

const mongoose = module.require("mongoose");
mongoose
  .connect("mongodb+srv://am765432142:Zxz123132@cluster0.7rru3.mongodb.net/")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
    console.log("can not connect");
  });

app.listen(3000, () => {
  console.log("started");
});
