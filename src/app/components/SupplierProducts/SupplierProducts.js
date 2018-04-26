import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import idToKey from 'id-to-key';

import './SupplierProducts.css';

class SupplierProducts extends Component {

  renderProducts = (supplier, products) => {
    const productsWithIdsAsKeys = idToKey(products);
    return supplier.products.map(productId => {
      const product = productsWithIdsAsKeys[productId];
      return (
        <tr key={product.name}>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      )
    });
  }

  render() {
    const { supplier } = this.props;
    const { products } = this.props;
    return (
      <div className="supplier-products-container">
        {supplier.products.length ?
          <div>
            <p>Products:</p>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
                {this.renderProducts(supplier, products)}
              </tbody>
            </table>
          </div>
        :
        <div>
          <p>Supplier has no products</p>
        </div>
        }
      </div>
    )
  }
}

SupplierProducts.propTypes = {
  supplier: PropTypes.object,
  products: PropTypes.array,
};

const mapStateToProps = state => ({
  products: state.products,
});

export default connect(mapStateToProps, null)(SupplierProducts);
