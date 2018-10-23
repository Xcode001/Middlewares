const express = require('express'),
          app = express();

// Using a general Middleware with 'use' method
app.use((req, res, next)=>{
  if(0 > 1){
    res.json("This is incorrect");
  }else {
    next(); //Proceeds to the next route
  }
});

app.get("/", (req, res)=>{
  res.json("Welcome to the development world")
})

app.listen(3000, ()=>{
  console.log("App is on port 3000");
})
