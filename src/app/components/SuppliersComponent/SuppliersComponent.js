import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions';

import './SuppliersComponent.css';

class SuppliersComponent extends Component {
  componentDidMount() {
    this.props.getSuppliers();
  }

  renderSuppliers() {
    const { suppliers } = this.props;
    console.log('Suppliers:', suppliers);
  }

  render() {
    return (
      <div className="suppliers-container">
        <h2>Suppliers</h2>
        {this.renderSuppliers()}
      </div>
    );
  }
}

SuppliersComponent.propTypes = {
  suppliers: PropTypes.array,
  products: PropTypes.array,
  isFetching: PropTypes.bool,
  getSuppliers: PropTypes.func,
  addSuppliers: PropTypes.func,
};

const mapStateToProps = state => ({
  suppliers: state.suppliers,
  products: state.products,
  isFetching: state.isFetching,
});

const mapDispatchToProps = dispatch => ({
  getSuppliers: () => dispatch(actions.getSuppliers()),
  addSupplier: () => dispatch(actions.addSupplier()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SuppliersComponent);
