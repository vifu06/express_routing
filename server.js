const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Simple get request
app.get('/',(req,res)=>{
    res.send("App working");
})

// Simple Post request
app.post('/postCheck',(req,res)=>{
    res.send("Simple Post call working");
})

// Middleware for all HTTP methods in the path
app.all('/allCheck',(req,res,next)=>{
    console.log("All check Middleware accessed");
    next();
})

// all method check get request
app.get('/allCheck',(req,res)=>{
    res.send("GET for all check processed check console for middleware message")
});

// all method check post request
app.post('/allCheck',(req,res)=>{
    res.send("POST for all check processed check console for middleware message")
});

// Extract data from url
app.get('/flights/:from-:to',(req,res)=>{
    res.send(`From - ${req.params.from} & To - ${req.params.to}`);
})

// Multiple Middlewares in a route
const m1 = (req,res,next) => {
    console.log("M1 middleware accessed");
    next();
}

const m2 = (req,res,next) => {
    console.log("M2 middleware accessed")
    next();
}

const f1 = (re,res) => {
    res.send("Execution complete for multiple middlwares")
}

// Request to handle multiple middlewares
app.get('/multiple-middlewares',[m1,m2,f1]);

app.get('/inline-middleware',(req,res,next)=>{
    console.log("This is the middleware, response will be sent in the callback");
    next();
},(req,res)=>{
    res.send("Response sent after the middleware")
});

app.listen(3002,()=>{
    console.log(`App Started on port 3002`);
});