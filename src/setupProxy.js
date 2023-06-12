// Create a setupProxy.js file in the root of your project

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://fakestoreapi.com',
      changeOrigin: true,
    })
  );
};
