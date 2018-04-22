import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions';

import './SuppliersListItem.css';

class SuppliersListItem extends Component {
  handleClick = () => {
    const { supplier } = this.props;
    this.props.deleteSupplier(supplier._id);
  }
  render() {
    const  { supplier } = this.props;
    return (
      <div className="supplier-item">
        <p className="supplier-item-name">{supplier.name}</p>
        <button className="supplier-item-button" onClick={this.handleClick}>X</button>
      </div>
    )
  }
};

SuppliersListItem.propTypes = {
  supplier: PropTypes.object,
  deleteSupplier: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  deleteSupplier: (supplierId) => dispatch(actions.deleteSupplier(supplierId))
})

export default connect(null, mapDispatchToProps)(SuppliersListItem);
