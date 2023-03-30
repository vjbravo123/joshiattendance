const cors = require("cors");
const express = require("express");
// const insert = require("./inserting_data")
const finding = require("../server/finding");
const app = express();
const PORT = 8000;
const bodyParser = require('body-parser');
// const arr = [];

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



app.use(cors());

const corsOptions = {
  origin:'http://localhost:3000',
  methods:['GET','POST'],
  allowedHeaders:['content-Type','Authorization']
};

app.use(cors(corsOptions));

//listening on port 3000
app.listen(PORT, ()=>{console.log(`RUNNING EXPRESS SERVER ON PORT ${PORT}`)});


// // function to insert form data in mongodb      
// const inserter = (arr) =>{
//     insert(arr);
//     console.log("successful")
// }

// handling the data coming from html sign-up form using post method to /submit-form endpoint
// app.post('/submit-form', (req, res) => {
//   const name = req.body.username;
//   const password = req.body.password;
//   const email = req.body.email;
  
//   let a = {"name":name,"pass":password , "email":email};
// //   arr.push(a);
  
//   inserter(a);
//   // Do something with the form data, such as saving it to a database
//   let b = {"name":a.name,"pass":a.pass , "email":email}   
//   res.send(b);
// });

app.post('/login',async(req,res)=>{
  const name = req.body.username;
  const password = req.body.password;
  let dc = await finding(name,password);
  if (dc) {
    let a = {"name":name,"password":password,"value":`${dc}`}
    res.send(a)
  }
  else{
    let a = {"name":name,"password":password,"value":`${dc}`}
    res.send(a)
}

})

app.get("/",(req , res)=>{
  res.json({"name":"vivek"})
});
