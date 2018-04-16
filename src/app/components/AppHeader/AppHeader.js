import React, { Component } from 'react';

import './AppHeader.css';

const AppHeader = () => (
  <div className="app-header">
    <img className="logo" src={require('../../assets/images/jdlt-logo.png')} alt="logo"/>
  </div>
)

export default AppHeader;
