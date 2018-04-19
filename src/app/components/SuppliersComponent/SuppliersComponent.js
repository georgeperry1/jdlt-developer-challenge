import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions';
import Loader from '../Loader';
import SuppliersListComponent from '../SuppliersListComponent';

import './SuppliersComponent.css';

class SuppliersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWindow: false,
    }
  }

  componentDidMount() {
    this.props.getSuppliers();
  }


  renderSuppliersList() {
    const { suppliers } = this.props;
    if (!suppliers.length) {
      return <h3>No suppliers, please create one</h3>;
    }
    return (
      <SuppliersListComponent suppliers={suppliers} />
    );
  }

  renderCreateSupplierButton() {
    return (
      <div className="add-supplier-container">
        <button
          className="add-supplier-button"
          //onClick={this.showCreateSupplierWindow()}
        >
          +
        </button>
      </div>
    )
  }

  // showCreateSupplierWindow = () => {
  //   this.setState({
  //     showWindow:!this.state.showWindow
  //   });
  // }

  renderLoading = () => <Loader />;

  render() {
    const { isFetching } = this.props;
    return (
      <div className="suppliers-container">
        <div className="suppliers-container-header">
          <h2>Suppliers</h2>
          {this.renderCreateSupplierButton()}
        </div>
        {isFetching ? (
          this.renderLoading()
        ) : (
          <div>
            {this.renderSuppliersList()}
          </div>
        )}
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
