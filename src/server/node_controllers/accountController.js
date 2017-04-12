var app = require('../server.js');
module.exports = {
  createUserAccount:createUserAccount
}
function createUserAccount(req,res) {

  console.log('enter',app);
  res.status(200)
}
