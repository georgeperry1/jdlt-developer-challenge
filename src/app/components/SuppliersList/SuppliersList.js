import React from 'react';
import PropTypes from 'prop-types';

import SuppliersListItem from '../SuppliersListItem';

import './SuppliersList.css';

const renderSuppliers = (suppliers) => {
  return suppliers.map(supplier => (
    <SuppliersListItem key={supplier.name} supplier={supplier}/>
  ));
};

const SuppliersList = ({ suppliers }) => (
  <div className="supplier-list">
    {renderSuppliers(suppliers)}
  </div>
);

SuppliersList.propTypes = {
  suppliers: PropTypes.array,
};

export default SuppliersList;
