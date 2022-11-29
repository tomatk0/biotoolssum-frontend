const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/data',
    createProxyMiddleware({
      target: 'http://147.251.115.167',
      changeOrigin: true,
    })
  );
};