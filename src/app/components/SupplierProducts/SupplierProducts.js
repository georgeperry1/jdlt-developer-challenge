import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './SupplierProducts.css';

class SupplierProducts extends Component {

  renderProducts = (supplier) => {
    const { products } = this.props;
    const supplierProducts = supplier.products.map(productId => {
      const product = products[productId];
      return (
        <tr>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      )
    });
  }

  render() {
    const { supplier } = this.props;
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
                {this.renderProducts(supplier)}
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
});git

export default connect(mapStateToProps, null)(SupplierProducts);
