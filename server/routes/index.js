
const init = (server, nextApp) => {
  server.get('*', (req, res) => {
    const handleNextRequest = nextApp.getRequestHandler();
    return handleNextRequest(req, res);
  });
};

module.exports = {
  init
};
