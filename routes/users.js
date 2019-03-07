var express = require('express');
var router = express.Router();
 
var User = require('../model/User');
 
/* GET users listing. */
 
router.get('/abc', function(req, res, next) {
  res.send({'name':'hello Amity','id':'1001'});
});
 
router.get('/result', function(req, res, next) {
  res.send({'name':'hello Amity 122','id':'100134'});
});
 
router.post('/', function (req, res) {
  User.create({
          name : req.body.name,
          email : req.body.email,
          password : req.body.password
      },
      function (err, user) {
          if (err) return res.status(500).send("There was a problem adding the information to the database.");
         res.status(200).send(user);
      });
});
 
// Get all Users
router.get('/', function (req, res) {
  User.find({}, function (err, users) {
      if (err) return res.status(500).send("There was a problem finding the users.");
      res.status(200).send(users);
  });
});
// Get user by Id
router.get('/:id', function (req, res) {
  User.findById(req.params.id, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
res.status(200).send(user);
  });
});
// Delete user
router.delete('/:id', function (req, res) {
  User.findByIdAndRemove(req.params.id, function (err, user) {
      if (err) return res.status(500).send("There was a problem deleting the user.");
res.status(200).send("User "+ user.name +" was deleted.");
  });
});
// Update user by id
router.put('/:id', function (req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true},
function (err, user) {
      if (err) return res.status(500).send("There was a problem updating the user.");
res.status(200).send(user);
  });
});
module.exports = router;
