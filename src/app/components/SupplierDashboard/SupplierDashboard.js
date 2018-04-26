import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions';
import Loader from '../Loader';
import SupplierDetails from '../SupplierDetails';

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
          <SupplierDetails supplier={selectedSupplier[0]} />
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
