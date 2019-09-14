const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
  clientID: '1053211937238-t42i02cpp5rkt2tddqmqkgcj2eqlissc.apps.googleusercontent.com',
  clientSecret: 'WsHXEHzqnYL2yGriKBp7992a',
  callbackURL: "http://localhost:4000/auth/google/callback"
},
  function (accessToken, refreshToken, profile, done) {
    console.log('acessToken: ', accessToken);
    console.log('refreshToken: ', refreshToken);
    console.log('profile: ', profile);
    done();
  }
));
