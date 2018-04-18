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
    // Return supplier
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
  try {
    if (!ctx.request.body.name) {
      ctx.status = 404
      ctx.body = {
        errors:[
          'Product name cannot be empty!'
        ]
      };
      return await next();
    }
    // Create new Product
    const product = await Product.create({
      name: ctx.request.body.name,
      price: ctx.request.body.price,
      parentSupplier: ctx.request.body.parentSupplier
    });
    // Add to parent Supplier
    const id = ctx.request.body.parentSupplier;
    const supplier = await Supplier.findOne({_id: id}).populate('products');
    supplier.products = [...supplier.products, product._id];
    await supplier.save();
    await product.save();
    // Return Product
    ctx.body = product;
    ctx.status = 201;
  }
  catch (error) {
    if (error) {
      ctx.body = error;
      ctx.status = 400;
    }
  }
}

module.exports.deleteSupplier = async (ctx, next) => {
  if ('DELETE' != ctx.method) return await next();
  try {
    // Remove Supplier from DB
    const id = ctx.params.supplierId;
    const supplier = await Supplier.findOneAndRemove({
      _id: id
    });
    // Return Suppliers
    ctx.body = `${supplier.name} has been successfully deleted!`;
    ctx.status = 200;
  }
  catch (error) {
    if (error) {
      console.log('Error:', error);
      ctx.body = error;
      ctx.status = 400;
    }
  }
}

module.exports.deleteProduct = async (ctx, next) => {
  if ('DELETE' != ctx.method) return await next();
  try {
    // Remove Supplier from DB
    const supplierId = ctx.params.supplierId;
    const productId = ctx.params.productId;
    // Delete Product
    const product = await Product.findOneAndRemove({
      _id: productId
    });
    // Remove product ID from supplier
    const supplier = await Supplier.findOne({
      _id: supplierId
    });
    supplier.products = supplier.products.filter(product => {
      return product._id !== productId;
    });
    await supplier.save();
    // Return Suppliers
    ctx.body = `${product.name} has been successfully deleted!`;
    ctx.status = 200;
  }
  catch (error) {
    if (error) {
      console.log('Error:', error);
      ctx.body = error;
      ctx.status = 400;
    }
  }
}
