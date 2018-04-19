import React from 'react';
import PropTypes from 'prop-types';

import './SuppliersListItem.css';

const SuppliersListItem = ({ supplier }) => (
  <div>
    <p>{supplier.name}</p>
  </div>
);

SuppliersListItem.propTypes = {
  supplier: PropTypes.object,
};

export default SuppliersListItem;
