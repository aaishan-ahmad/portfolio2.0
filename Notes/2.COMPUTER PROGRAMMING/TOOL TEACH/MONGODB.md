- no-sql , document based databased
- work on BSON formate

### mongodb with node js
- we using mongoose package 
```js
const app = require("express")();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParse = require("body-parser");

//middleware
app.use(bodyParse());
app.use(cors());

// connect  with mongodb
mongoose.connect("mongodb://127.0.0.1:27017/mydb" or "mongodb+srv://<user name>:<Db_password>@cluster0.myskyxj.mongodb.net/<database_name>?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("connect to db"))
  .catch((error) => {

    console.log("error with not connected mongodb" + error);
  });

//schema and model for database
const userSchema = new mongoose.Schema({
  name:String,
  age: Number,
  email: String,
  gender: String,
  programmer: Boolean,
});
const User = mongoose.model("collections", userSchema); // model

  
//routes
app.get("/", (req, res) => {
  res.send("hello");
});
app.post("/", (req, res) => { //insert data on db
  User.create({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    gender: req.body.gender,
    programmer: req.body.programmer,
  });
  console.log("succesful create a user");
  res.send("hello");

});

app.listen(3000, () => {

  console.log("listening on port 3000");

});
```


## Mogodb Atlas
![[Pasted image 20240923111336.png]]