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


  db.insertUserAccount([req.body.FirstName,req.body.LastName,req.body.EmailAddres
                      ,req.body.Password],function(err,response) {

                        if(!err)res.status(200).send(response);
                        else res.status(422).send(err)
                      })
});


// app.post('/api/userLogin', function create_userLogin(req,res) {
//     console.log('post',req.body);
//     db.userlogininfo.save({email : req.body.email, username : req.body.username,password:req.body.password}, function(err,updated){
//       if(!err){
//         res.status(200).send('success');
//       }
//       else {
//         console.log(err);
//         res.status(422).send('Something went wrong');
//       }
//   //the updated record for the new user
//     });
//
// });

//
//
// app.post('/api/userLoginCheck', function create_userLogin(req,res) {
//     console.log('post',req.body);
//     db.userlogininfo.where("email=$1 AND password=$2", [req.body.email, req.body.password], function(err, userInfo){
//   //products 10 and 21
//
//   if(!err){
//     console.log('user',userInfo);
//     if(userInfo.length<=0) {
// console.log('user2',userInfo);
//       return res.status(404).send('User not found');
//     }
//     return res.status(200).send('success');
//   }
//   else {
//     console.log(err);
//     res.status(422).send('Something went wrong');
//   }
//   });
//
//
// });
//
//
//
//
//
// app.post('/api/userProfile', function(req,res) {
//     // console.log('post',req.body, db);
//     //db.save_profile([], function(err, response) {});
//
//     db.userProfile.save({
//                   name:req.body.name,
//                   work:req.body.work,
//                   occupation:req.body.occupation,
//                   skills:req.body.skills
//                 }, function(err,updated){
//                   if (err) console.log('ERROR SAVING PROFILE', err);
//       if(!err){
//         res.status(200).send('success');
//       }
//       else {
//         console.log(err);
//         res.status(422).send('Something went wrong');
//       }
//   //the updated record for the new user
//     });
//
// });
//
//
//
// app.get('/api/readUserLogin', function read_userLogin(req,res) {
//     console.log('enter point');
//     db.read_userLogin(function(err,userLoginInfo) {
//       console.log('enter log',err,userLoginInfo);
//       if(true){
//         res.status(200).send(userLoginInfo);
//       }
//       else {
//         res.status(422).json(err);
//       }
//     })
// });

app.listen(port, function() {
  console.log("Started server on port", port);
});
