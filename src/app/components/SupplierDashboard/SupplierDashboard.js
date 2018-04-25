import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions';
import Loader from '../Loader';

import './SupplierDashboard.css';

class SupplierDashboard extends Component {

  renderSelectedSupplier = () => {
    const { suppliers } = this.props;
    const { selected } = this.props;
    const selectedSupplier = suppliers.filter(supplier => {
      return supplier._id === selected;
    });
    console.log('Selected:', selectedSupplier[0]);
    return (
      <div>
        {selected !== '' ?
          <div className="supplier-dashboard-details-container">
            <img
              className="supplier-dashboard-details-image"
              src={require('../../assets/images/factory.png')}
              alt="Supplier Logo"
            />
            <div className="supplier-dashboard-details-info">
              <p className="supplier-dashboard-details-header">{selectedSupplier[0].name}</p>
              <div className="supplier-dashboard-details-divider"></div>
              <p className="supplier-dashboard-details-description">{selectedSupplier[0].description}</p>
              <p className="supplier-dashboard-details-header">Number of Products:</p>
              <div className="supplier-dashboard-details-divider"></div>
              <p className="supplier-dashboard-details-description">{selectedSupplier[0].products.length}</p>
            </div>
          </div>
        :
        <div>
          <p>Please selected a supplier</p>
        </div>}
      </div>
    )
  }

  renderLoading = () => <Loader />;

  render() {
    const { selected } = this.props;
    return (
      <div className="supplier-dashboard-container">
        <div className="supplier-dashboard-details">
          {this.renderSelectedSupplier()}
        </div>
        <div className="supplier-dashboard-products">

        </div>
      </div>
    );
  }
}

SupplierDashboard.propTypes = {
  suppliers: PropTypes.array,
  isFetching: PropTypes.bool,
};

const mapStateToProps = state => ({
  suppliers: state.suppliers,
  isFetching: state.isFetching,
  selected: state.selected,
});

export default connect(mapStateToProps, null)(SupplierDashboard);
