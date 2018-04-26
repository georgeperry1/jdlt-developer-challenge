import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions';
import Loader from '../Loader';
import SupplierDetails from '../SupplierDetails';
import SupplierProducts from '../SupplierProducts';

import './SupplierDashboard.css';

class SupplierDashboard extends Component {

  renderSelectedSupplier = () => {
    const { suppliers } = this.props;
    const { selected } = this.props;
    const selectedSupplier = suppliers.filter(supplier => {
      return supplier._id === selected;
    });
    return (
      <div>
        {selected !== '' ?
          <div>
            <div className="supplier-dashboard-details">
              <SupplierDetails supplier={selectedSupplier[0]} />
            </div>
            <div className="supplier-dashboard-products">
              <SupplierProducts supplier={selectedSupplier[0]} />
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
          {this.renderSelectedSupplier()}
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
