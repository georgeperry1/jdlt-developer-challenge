import React from 'react';
import PropTypes from 'prop-types';

import './SupplierProducts.css';

const SupplierProducts = ({ supplier }) => (
  <div className="supplier-products-container">
    <p>Products:</p>
  </div>
);

SupplierProducts.propTypes = {
  supplier: PropTypes.object,
};

export default SupplierProducts;
