const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
module.exports = passport => {
  passport.use(new GoogleStrategy({
    clientID: '420105528205-vp1v2emc0g9a5kka2a1ql1u19152ev32.apps.googleusercontent.com',
    clientSecret: 'q9N2IDButvweBsNlGZDhyxdo',
    callbackURL: "http://localhost:4000/auth/google/callback"
  },
    (accessToken, refreshToken, profile, done) => {
      done(null, profile);
    }
  ));


  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
