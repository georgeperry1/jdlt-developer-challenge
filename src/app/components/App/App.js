import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppHeader from '../AppHeader';
import Suppliers from '../Suppliers';
import * as actions from '../../store/actions';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <Suppliers />
      </div>
    );
  }
}

export default connect(null, null)(App);
