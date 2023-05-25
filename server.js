const express = require('express');
const app = express();
  

    //loading config from env file
 require('dotenv').config();
 const PORT = process.env.PORT || 4000;

    //middleware is needed to parse json body request
 app.use(express.json());
  

    //importing routes of todo API
 const todoRoutes = require("./routes/todos")
 


    //mounting  the todo API
 app.use("/api/v1" , todoRoutes);

    // start server 
 app.listen(PORT, ()=> {
    console.log(`Server started at ${PORT}` )
 }) 

     //connect to database
 const dbConnect = require("./config/database");



    //default route
app.get('/' , ( req,res) => {
    res.send(`<h1> This is home page</h1>`)
})

