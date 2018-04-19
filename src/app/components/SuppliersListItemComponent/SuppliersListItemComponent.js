import React from 'react';
import PropTypes from 'prop-types';

import './SuppliersListItemComponent.css';

const SuppliersListItemComponent = ({ supplier }) => (
  <div>
    <p>{supplier.name}</p>
  </div>
);

SuppliersListItemComponent.propTypes = {
  supplier: PropTypes.object,
};

export default SuppliersListItemComponent;
