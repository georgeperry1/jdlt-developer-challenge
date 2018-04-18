import React from 'react';
import PropTypes from 'prop-types';

import './SuppliersListItemComponent.css';

const SuppliersListItemComponent = ({ supplier }) => (
  <div>
    <h3>{supplier.name}</h3>
  </div>
);

SuppliersListItemComponent.propTypes = {
  supplier: PropTypes.object,
};

export default SuppliersListItemComponent;
