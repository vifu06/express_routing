const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    console.log('User Middleware');
    next();
})

router.get('/list',(req,res)=>{
    res.send('List Users')
}).post('/add',(req,res)=>{
    res.send('Add User');
}).put('/update',(req,res)=>{
    res.send('Update User')
}).delete('/remove',(req,res)=>{
    res.send('Remove User')
});

module.exports = router;