const koa = require('koa');
const app = module.exports = new koa();
const bodyParser = require('koa-bodyparser');
const compress = require('koa-compress');
const cors = require('kcors');
const logger = require('koa-logger');
const path = require('path');
const serve = require('koa-static');
const routes = require('./routes.js');
require('./db');

//Middleware
app.use(logger());
app.use(cors());
app.use(bodyParser({
  multipart:true
}));
routes(app);
app.use(serve(path.join(__dirname, 'public')));
app.use(compress());

//Run server
if (!module.parent) {
  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log('Server is listening on port:', port);
}
