import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppHeader from '../AppHeader';
import * as actions from '../../store/actions'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
      </div>
    )
  }
}

App.propTypes = {
  suppliers: PropTypes.array,
  products: PropTypes.array,
  isFetching: PropTypes.bool,
  getSuppliers: PropTypes.func,
}

const mapStateToProps = state => ({
  suppliers: state.suppliers,
  products: state.products,
  isFetching: state.isFetching,
});

const mapDispatchToProps = dispatch => ({
  getSuppliers: () => dispatch(actions.getSuppliers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
