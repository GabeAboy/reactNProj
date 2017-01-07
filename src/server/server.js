var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var cors = require('cors');

var port = 3000;
var conn = massive.connectSync({
  connectionString : "postgres://postgres:@localhost/hub"
});
var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.set('db', conn);
var db = app.get('db');



app.post('/api/userLogin', function create_userLogin(req,res) {
    console.log(req.body);
     db.create_userLogin([req.body.email,req.body.username,
       req.body.password],function(err,response) {
       if(!err){
         console.log('worked',response);
         res.status(200).send(response);
       }
       else res.status(422).send(err);
     })
});


app.get('/api/userLogin', function read_userLogin(req,res) {
    db.read_userLogin(function(err,userLoginInfo) {
      if(!err){
        res.status(200).json(userLoginInfo);
      }
      else {
        res.status(422).json(err);
      }
    })
});

app.listen(port, function() {
  console.log("Started server on port", port);
});
