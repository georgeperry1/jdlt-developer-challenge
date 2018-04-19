import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions';

import './CreateSupplier.css';

class CreateSupplier extends Component {
  handleClick() {
    this.props.addSupplier();
  }

  render() {
   return (
     <div>
       <h1>CreateSupplier</h1>
     </div>
   )
  }
}

CreateSupplier.propTypes = {
  addSuppliers: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addSupplier: (supplier) => dispatch(actions.addSupplier(supplier)),
});

export default connect(null, mapDispatchToProps)(CreateSupplier);
