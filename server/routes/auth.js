const express = require('express');
const passport = require('passport');

const router = express.Router();

module.exports = () => {
  router.get("/google", (req, res, next) => {
    passport.authenticate("google", { scope: ['email', 'profile'] })(req, res, next);
  });

  router.get('/google/callback',  (req, res, next) => {
    passport.authenticate('google',  (err, user) => {
      if (err) return next(err);
      if (!user) return res.redirect('/');
      req.login(user,  error => {
        if (error) return next(err);
        return res.redirect('/overview');
      });
    })(req, res, next);
  });
  return router;
};
