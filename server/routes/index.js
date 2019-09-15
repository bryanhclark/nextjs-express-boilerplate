const authRoutes = require('./auth');

const init = (server, nextApp) => {
  server.use('/auth', authRoutes());

  server.get('*', (req, res) => {
    const handleNextRequest = nextApp.getRequestHandler();
    return handleNextRequest(req, res);
  });
};

module.exports = {
  init
};
