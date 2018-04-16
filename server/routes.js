const router = require('koa-router')();
const controller = require('./controller');

const routes = function (app) {
  router.get('/suppliers', controller.getSuppliers);
  router.post('/suppliers', controller.addSupplier);
  router.post('/suppliers/:id', controller.addProduct);

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
