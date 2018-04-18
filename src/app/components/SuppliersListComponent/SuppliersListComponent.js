import React from 'react';
import PropTypes from 'prop-types';

import SuppliersListItemComponent from '../SuppliersListItemComponent';

import './SuppliersComponent.css';

const renderSuppliers = (suppliers) => {
  return suppliers.map(suppier => {
    return (
      <SuppliersListItemComponent supplier={supplier}/>
    )
  });
};

const SuppliersListComponent = ({ suppliers }) => (
  <div>
    <h4>SuppliersListComponent</h4>
  </div>
);

SuppliersListComponent.propTypes = {
  suppliers: PropTypes.array,
};

export default SuppliersListComponent;
