import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions';

import './SuppliersListItem.css';

class SuppliersListItem extends Component {
  handleClick = () => {
    const { supplier } = this.props;
    this.props.selectSupplier(supplier._id);
  }

  handleDelete = () => {
    const { supplier } = this.props;
    this.props.deleteSupplier(supplier._id);
  }

  render() {
    const  { supplier } = this.props;
    return (
      <div className="supplier-item bobble" onClick={this.handleClick}>
        <img
          className="supplier-item-image"
          src={require('../../assets/images/factory.png')}
          alt="Supplier Logo"
        />
        <p className="supplier-item-name">{supplier.name}</p>
        <button className="supplier-item-button" onClick={this.handleDelete}>
          <img
            className="supplier-item-delete"
            src={require('../../assets/images/error.png')}
            alt="Delete"
          />
        </button>
      </div>
    )
  }
};

SuppliersListItem.propTypes = {
  supplier: PropTypes.object,
  deleteSupplier: PropTypes.func,
  selectSupplier: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  deleteSupplier: (supplierId) => dispatch(actions.deleteSupplier(supplierId)),
  selectSupplier: (supplierId) => dispatch(actions.deleteSupplier(supplierId))
})

export default connect(null, mapDispatchToProps)(SuppliersListItem);
