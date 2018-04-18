import * as types from '../store/actionTypes';

const API_ROOT = 'http://localhost:3000';
const HEADER = {
  'Content-Type': 'application/json'
};

const apiService = store => next => action => {
  let newAction;

  // Get Suppliers
  if (action === types.GET_SUPPLIERS) {
    fetch(API_ROOT + action.meta.params)
    .then(response => response.json())
    .then(fetchedSuppliers => {
      if (fetchedSuppliers) {
        newAction = {
          ...action,
          type: types.GET_SUPPLIERS_SUCCESS,
          suppliers: fetchedSuppliers,
        }
        store.dispatch(newAction);
      } else {
        newAction = {
          ...action,
          type: types.GET_SUPPLIERS_FAILURE,
        }
        store.dispatch(newAction);
      }
    })
  }

  // Add Supplier
  if (action === types.ADD_SUPPLIERS) {
    fetch(API_ROOT + action.meta.params, {
      method: action.meta.method,
      header: HEADER,
      body: JSON.stringify(action.supplier),
    })
    .then()
    .then()
    newAction = {
      ...action,
    }
    store.dispatch(newAction);
  }

  if (action === types.DELETE_SUPPLIERS) {
    fetch()
    .then()
    .then()
    newAction = {
      ...action,
    }
    store.dispatch(newAction);
  }

  if (action === types.ADD_PRODUCTS) {
    fetch()
    .then()
    .then()
    newAction = {
      ...action,
    }
    store.dispatch(newAction);
  }

  if (action === types.DELETE_PRODUCTS) {
    fetch()
    .then()
    .then()
    newAction = {
      ...action,
    }
    store.dispatch(newAction);
  }
  return next(action);
}

export default apiService;
