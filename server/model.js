const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Supplier = new Schema({
  name: String,
  description: String,
  products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
});

const Product = new Schema({
  name: String,
  price: Number,
  parentSupplier: String
});

module.exports.Supplier = mongoose.model('Supplier', Supplier);
module.exports.Product = mongoose.model('Product', Product);
