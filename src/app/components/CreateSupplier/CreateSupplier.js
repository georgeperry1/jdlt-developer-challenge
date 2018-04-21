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
     <div className="create-supplier-modal">
       <h1>Create a new Supplier:</h1>
       <form className="create-supplier-form">
         <label className="create-supplier-label">Name:</label>
         <input className="create-supplier-input"></input>
         <label className="create-supplier-label">Description:</label>
         <textarea className="create-supplier-textarea"></textarea>
       </form>
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
