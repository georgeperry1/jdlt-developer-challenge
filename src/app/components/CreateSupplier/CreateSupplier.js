import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions';

import './CreateSupplier.css';

class CreateSupplier extends Component {

  handleClick = (event) => {
    event.preventDefault();
    const newSupplierInfo = {
      name: this.name.value,
      description: this.description.value,
    };
    this.props.addSupplier(newSupplierInfo);
    this.name.value = null;
    this.description.value = null;
    this.props.hide();
  }

  handleClose = () => {
    this.props.hide();
  }

  render() {
   return (
     <div className="create-supplier-window">
       <div className="create-supplier-modal">
         <div className="create-supplier-header">
           <p>Create a new Supplier:</p>
           <button className="create-supplier-close" onClick={this.handleClose}>x</button>
         </div>
         <form className="create-supplier-form">
           <label className="create-supplier-label">
             Name:
             <input
               className="create-supplier-input"
               onChange={this.handleNameChange}
               type="text"
               ref={(input) => {this.name = input}}
               required
             />
           </label>
           <label className="create-supplier-label">
             Description:
             <textarea
               className="create-supplier-textarea"
               onChange={this.handleDescriptionChange}
               type="text"
               ref={(input) => {this.description = input}}
               required
             />
           </label>
           <button className="create-supplier-button" onClick={this.handleClick}>Create</button>
         </form>
       </div>
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
