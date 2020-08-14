var express = require('express');
var app = express();
app.get('/msg',(req,res)=>{
  res.send('hello,world');
});
app.listen(8072,console.log('server running!'));
