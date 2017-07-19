const express = require('express')
  , bodyParser = require('body-parser')
  , cors = require('cors')
  , massive = require('massive')
  , matchesCtrl = require('./server/matchesCtrl')
  , conversationCtrl = require('./server/conversationCtrl')
  , profilesCtrl = require('./server/profilesCtrl')
  // , config = require('./config')
  , port = 3000
  , app = express();


app.use(bodyParser.json());
app.use(cors());

//Local
// massive(config.dbURLString).then(function (db) {
//   app.set('db', db)
// });
//Online
massive(process.env.connectionString).then(function (db) {
  app.set('db', db)
});


app.get('https://charmi-server.herokuapp.com/matches', matchesCtrl.getAllMatches);
app.get('https://charmi-server.herokuapp.com/conversations', conversationCtrl.getConversations);
app.get('https://charmi-server.herokuapp.com/profiles', profilesCtrl.getProfiles);


app.listen(process.env.PORT || port, function () {
  console.log(`Listening on port ${this.address().port}...`)
})