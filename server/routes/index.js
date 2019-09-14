const passport = require('passport');


const init = (server, nextApp) => {

  server.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

  server.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
      console.log('HEREJAJSDSA');
    });

  server.get('*', (req, res) => {
    const handleNextRequest = nextApp.getRequestHandler();
    return handleNextRequest(req, res);
  });
};

module.exports = {
  init
};
