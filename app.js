const express = require('express'),
          app = express();

//Using a function as a middleware
function enteringAnotherState(req, res, next){
  if(req.params.abuja === 'abuja'){
    next();
  }else{
    res.json("This wont work");
  }
}

app.get("/way-to/:abuja", enteringAnotherState, (req, res)=>{
    res.json("Welcome to "+ req.params.abuja)
})

app.get("/", (req, res)=>{
  res.json("Welcome to the development world")
})

app.listen(3000, ()=>{
  console.log("App is on port 3000");
})
