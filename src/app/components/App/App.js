import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppHeader from '../AppHeader';
import SuppliersComponent from '../SuppliersComponent';
import * as actions from '../../store/actions';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <SuppliersComponent />
      </div>
    );
  }
}

export default connect(null, null)(App);
