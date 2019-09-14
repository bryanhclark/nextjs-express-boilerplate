const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { getUserById } = require('../../services/user');

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
module.exports = passport => {
  passport.use(new GoogleStrategy({
    clientID: '1053211937238-t42i02cpp5rkt2tddqmqkgcj2eqlissc.apps.googleusercontent.com',
    clientSecret: 'WsHXEHzqnYL2yGriKBp7992a',
    callbackURL: "http://localhost:4000/auth/google/callback"
  },
    (accessToken, refreshToken, profile, done) => {
      done(null, profile);
    }
  ));


  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser(async (userId, done) => {
    try {
      const user = await getUserById(userId);
      done(null, JSON.parse(JSON.stringify(user)));
    } catch (err) {
      done(err);
    }
  });
};
