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
      description: ctx.request.body.description
    });
    await supplier.save();
    const suppliers = await Supplier.find();
    // Return supplier
    ctx.body = suppliers;
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
    const suppliers = await Supplier.find();
    // Return Product
    ctx.body = {
      suppliers,
      product
    };
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
    const promises = await supplier.products.map(product => Product.findOneAndRemove({
      _id: product._id
    }));
    const newProducts = await Promise.all(promises);
    const suppliers = await Supplier.find();
    const products = await Product.find();
    // Return Suppliers
    ctx.body = {
      suppliers,
      products
    };
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
    const suppliers = await Supplier.find();
    const products = await Product.find();
    // Return Suppliers
    ctx.body = {
      suppliers,
      products
    };
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
