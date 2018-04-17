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
  try {
    if (!ctx.request.body.name) {
      ctx.status = 404
      ctx.body = {
        errors:[
          'Supplier name cannot be empty!'
        ]
      };
      return await next();
    }
    // Create new Supplier
    const supplier = await Supplier.create({
      name: ctx.request.body.name,
    });
    // Create products added with Supplier
    const promises = await ctx.request.body.products.map(product => Product.create({
      name: product.name,
      price: product.price
    }));
    // Map product IDs to supplier
    const products = await Promise.all(promises);
    supplier.products = products.map(product => product._id);
    await supplier.save();
    //Return supplier
    ctx.body = supplier;
    ctx.status = 201;
  }
  catch (error) {
    if (error) {
      ctx.body = error;
      ctx.status = 400;
    }
  }
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
