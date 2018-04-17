const { Supplier, Product } = require('./model');

module.exports.getSuppliers = async (ctx, next) => {
  if ('GET' != ctx.method) return await next();
  try {
    const suppliers = await Supplier.find();
    const products = await Product.find();

    ctx.body = {
      suppliers,
      products
    };
    ctx.status = 200;
  }
  catch (error) {
    if (error) {
      ctx.body = error.response.data;
      ctx.status = error.response.status;
    }
  }
}

module.exports.addSupplier = async (ctx, next) => {
  if ('POST' != ctx.method) return await next();
}

module.exports.addProduct = async (ctx, next) => {
  if ('POST' != ctx.method) return await next();
}

module.exports.deleteSupplier = async (ctx, next) => {
  if ('DELETE' != ctx.method) return await next();
}

module.exports.deleteProduct = async (ctx, next) => {
  if ('DELETE' != ctx.method) return await next();
}
