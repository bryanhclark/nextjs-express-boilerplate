const passport = require('passport');

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (userId, done) => {
  try {
    // const user = getUser
    // done(null, JSON.parse(JSON.stringify(user)));
  } catch (err) {
    done(err);
  }
});
