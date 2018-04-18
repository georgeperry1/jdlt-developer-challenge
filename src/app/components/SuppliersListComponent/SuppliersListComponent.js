import React from 'react';
import PropTypes from 'prop-types';

import SuppliersListItemComponent from '../SuppliersListItemComponent';

import './SuppliersListComponent.css';

const renderSuppliers = (suppliers) => {
  return suppliers.map(supplier => (
    <SuppliersListItemComponent key={supplier.name} supplier={supplier}/>
  ));
};

const SuppliersListComponent = ({ suppliers }) => {
  const supplierList = suppliers.map(supplier => (
    <SuppliersListItemComponent key={supplier.name} supplier={supplier}/>
  ));
  return (
    <div>
      {renderSuppliers(suppliers)}
    </div>
  )
};

SuppliersListComponent.propTypes = {
  suppliers: PropTypes.array,
};

export default SuppliersListComponent;
