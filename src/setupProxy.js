const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/solr',
    createProxyMiddleware({
      target: 'http://localhost:8983/solr',
      changeOrigin: true,
    })
  );
};
