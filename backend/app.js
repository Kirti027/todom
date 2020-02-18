const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todo = require('./models/todo');
//app.use((req,res,next) =>{
  //  res.end("Middleware Connected");
    //next();
//})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req,res,next) =>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,PATCH,DELETE,OPTIONS")
    next();
});

mongoose.connect('mongodb+srv://todo1:todo1@cluster0-ol6ig.mongodb.net/test?retryWrites=true&w=majority',{ useFindAndModify: false,useNewUrlParser: true,useUnifiedTopology: true}).then(() => {
    console.log("mongodb Connected");
}).catch(() =>{
console.log("mongodb not connected");
})

app.get('/posts',(req,res,next) => {
    const post = todo.find().then(docs => {
        const todo = docs
        res.status(200).json({
            message: "Posts Fetched Successfully",
            posts:todo
    });
}).catch(error =>{
    res.status(400).json({
        message: "Posts can not be Fetched"
    });
})
})

app.post('/Createposts',(req,res,next) => {
    const todoObj = new todo({
        title: req.body.title,
        content: req.body.content

    })
    console.log(todoObj);
    todoObj.save();
    res.status(201).json({
        message: "Post added Seuccessfully."
        
    });

})

app.put('/updateTodo/:id',(req,res,next) => {
    console.log("Updated");
    let body = {
        _id: req.params.id,
        title: req.body.title,
        content: req.body.content
    }
    todo.findOneAndUpdate({_id: req.params.id},{$set: body},(error,doc,result)=> {
        res.status(202).json({
            message: "Todo updated successfully"
        })
    })
})

app.delete('/deleteTodo/:id',(req,res,next) => {
    todo.deleteOne({_id: req.params.id},(error)=> {
        console.log(error);
    }).then(()=>{
        res.status(201).json({
            message: "Todo deleted successfully"
        })
    })
})


module.exports = app;