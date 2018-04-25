import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions';
import Loader from '../Loader';

import './SupplierDashboard.css';

class SupplierDashboard extends Component {

  renderLoading = () => <Loader />;

  render() {
    const { isFetching } = this.props;
    return (
      <div className="supplier-dashboard-container">
        
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
});

export default connect(mapStateToProps, null)(SupplierDashboard);
