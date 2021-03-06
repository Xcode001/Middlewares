const express = require('express'),
         cors = require('cors'),
          app = express();

//Using a function as a middleware
// Using only the cors() method without specifying anything gives any application full right to calling the api from any point
// app.use(cors());

app.use(cors({
  origin: ["http://localhost/3000"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))


app.get("/", (req, res)=>{
  res.json({
    status: "API is live!"
  })
})

app.listen(3000, ()=>{
  console.log("App is on port 3000");
})
