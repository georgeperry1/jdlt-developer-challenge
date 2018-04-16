const router = require('koa-router')();

const routes = function (app) {

  router.options('/', options);
  router.head('/', head);

  app
    .use(router.routes())
    .use(router.allowedMethods());
  return app;
}

const head = async () => {
  return;
};

const options = async () => {
  this.body = 'Allow: HEAD,GET,PUT,DELETE,OPTIONS';
};

module.exports = routes;
