const User = require('../models/user.js');

const getUsersApi = ((req, res, next) => {
    var query = User.find({}, 'first_name last_name');
    query.sort('-last_name').exec(function (err, data) {
        res.set('Cache-control', "max-age-300").send(data);
    })
})

const login = ((req, res, next) => {
    let userName = req.body.username;
    let password_attempt = req.body.password;
    User.findOne({ user_name: userName }, (err, user) => {
      if (err || !user) {
        console.log("User with user_name:" + userName + " not found.");
        res.status(400).send("Login name was not recognized");
        return;
      }
      if (user.password != password_attempt) {
        res.status(400).send("Wrong password");
        return;
      }
      
      req.session.regenerate(function (err) {
        if (err) next(err)
  
        // store user information in session, typically a user id
        req.session.user = user._id
        req.session.cookie.originalMaxAge = 3600000; // 1 hr
        req.session.cookie.reSave = true;
        // save the session before redirection to ensure page
        // load does not happen before session is saved
        req.session.save(function (err) {
          if (err) return next(err)
          res.status(200).send(user);
        })
      })
    });
  })