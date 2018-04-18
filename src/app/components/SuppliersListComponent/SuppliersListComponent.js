import React from 'react';
import PropTypes from 'prop-types';

const SuppliersListComponent = ({ suppliers }) => (
  <div>
    <h4>SuppliersListComponent</h4>
  </div>
);

SuppliersListComponent.propTypes = {
  suppliers: PropTypes.array,
};

export default SuppliersListComponent;
