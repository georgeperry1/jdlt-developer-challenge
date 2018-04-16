const { Supplier, Product } = require('./model');

module.exports.getSuppliers = async (ctx, next) => {
  if ('GET' != ctx.method) return await next();
}

module.exports.addSupplier = async (ctx, next) => {
  if ('POST' != ctx.method) return await next();
}

module.exports.addProduct = async (ctx, next) => {
  if ('POST' != ctx.method) return await next();
}
