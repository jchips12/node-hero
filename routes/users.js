const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/users', (req, res) => {
  var user = new User({
    name: req.body.name,
    age: req.body.age
  });

  user.save((err) => {
    if (err) {
      res.json({
        success: false,
        message: err
      });
    }
    res.json({
      success: true
    });
  })
})

router.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.json({
        success: false,
        message: err
      });
    }
    res.json({
      success: true,
      users: users
    });
  })
});

module.exports = router