import React from 'react';
import PropTypes from 'prop-types';

import './SupplierDetails.css';

const SupplierDetails = ({ supplier }) => (
  <div className="supplier-dashboard-details-container">
    <img
      className="supplier-dashboard-details-image"
      src={require('../../assets/images/factory.png')}
      alt="Supplier Logo"
    />
    <div className="supplier-dashboard-details-info">
      <p className="supplier-dashboard-details-header">{supplier.name}</p>
      <div className="supplier-dashboard-details-divider"></div>
      <p className="supplier-dashboard-details-description">{supplier.description}</p>
      <p className="supplier-dashboard-details-header">Number of Products:</p>
      <div className="supplier-dashboard-details-divider"></div>
      <p className="supplier-dashboard-details-description">{supplier.products.length}</p>
    </div>
  </div>
);

SupplierDetails.propTypes = {
  supplier: PropTypes.object,
};

export default SupplierDetails;
