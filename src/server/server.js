var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var cors = require('cors');

var accountController = require('./node_controllers/accountController.js')

var port = 1080;
var conn = massive.connectSync({
  connectionString : "postgres://postgres:@localhost/hub"
});
var app = module.exports = express();

// module.exports ={
//   mod:app
// }
app.use(bodyParser.json());
app.use(cors());
app.set('db', conn);
var db = app.get('db');

app.post('/api/createUserAccount',function(req,res) {
  db.checkEmailExist([req.body.EmailAddres],function(err,response) {
    if(!response.length>0){
      db.insertUserAccount([req.body.FirstName,req.body.LastName,req.body.EmailAddres
                          ,req.body.Password],function(err,response) {
                            if(!err)res.status(200).send(response);
                            else res.status(404).send(err)
                          })
    }
    else{
      res.status(422).send('Account already exists')
    }
  })
});
app.post('/api/AccountLogin',function(req,res) {
  console.log('hit');
  db.accountLogin([req.body.EmailAddres,req.body.Password],function (err,response) {
    console.log(response,err);
    res.status(200).send('good')
  })
})


app.listen(port, function() {
  console.log("Started server on port", port);
});
