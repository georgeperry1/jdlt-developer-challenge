import * as types from '../store/actionTypes';

const API_ROOT = 'http://localhost:3000';

const apiService = store => next => action => {
  let newAction;

  // Get Suppliers
  if (action.type === types.GET_SUPPLIERS) {
    fetch(API_ROOT + action.meta.params)
    .then(response => response.json())
    .then(fetchedSuppliers => {
      if (fetchedSuppliers) {
        newAction = {
          ...action,
          type: types.GET_SUPPLIERS_SUCCESS,
          suppliers: fetchedSuppliers.suppliers,
          products: fetchedSuppliers.products,
        }
        store.dispatch(newAction);
      } else {
        newAction = {
          ...action,
          type: types.GET_SUPPLIERS_FAILURE,
        }
        store.dispatch(newAction);
      }
    });
  }

  // Add Supplier
  if (action.type === types.ADD_SUPPLIER) {
    fetch(API_ROOT + action.meta.params, {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action.supplier)
    })
    .then(response => {
      if (response.status === 404) {
        newAction = {
          ...action,
          type: types.ADD_SUPPLIER_FAILURE,
        }
        store.dispatch(newAction);
      }
      return response.json();
    })
    .then(newSuppliers => {
      newAction = {
        ...action,
        type: types.ADD_SUPPLIER_SUCCESS,
        suppliers: newSuppliers,
      }
      store.dispatch(newAction);
    });
  }

  // Delete Supplier
  if (action.type === types.DELETE_SUPPLIER) {
    fetch(API_ROOT + action.meta.params, {
      method: action.meta.method,
    })
    .then(response => {
      if (response.status === 400) {
        newAction = {
          ...action,
          type: types.DELETE_SUPPLIER_FAILURE,
        }
        store.dispatch(newAction);
      }
      return response.json()
    })
    .then(newSuppliers => {
      newAction = {
        ...action,
        type: types.DELETE_SUPPLIER_SUCCESS,
        suppliers: newSuppliers.suppliers,
        products: newSuppliers.products,
      }
      store.dispatch(newAction);
    });
  }

  // Add Product
  if (action.type === types.ADD_PRODUCT) {
    fetch(API_ROOT + action.meta.params, {
      method: action.meta.method,
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action.product),
    })
    .then(response => {
      if (response.status === 404) {
        newAction = {
          ...action,
          type: types.ADD_PRODUCT_FAILURE,
        }
        store.dispatch(newAction);
      }
      return response.json();
    })
    .then(newProduct => {
      newAction = {
        ...action,
        type: types.ADD_PRODUCT_SUCCESS,
        product: newProduct.product,
        supplier: newProduct.supplier
      }
      store.dispatch(newAction);
    });
  }

  // Delete Product
  if (action.type === types.DELETE_PRODUCT) {
    fetch(API_ROOT + action.meta.params, {
      method: action.meta.method,
    })
    .then(response => {
      if (response.status === 400) {
        newAction = {
          ...action,
          type: types.DELETE_PRODUCT_FAILURE,
        }
        store.dispatch(newAction);
      }
      return response.json()
    })
    .then(newProducts => {
      newAction = {
        ...action,
        type: types.DELETE_PRODUCT_SUCCESS,
        suppliers: newProducts.suppliers,
        products: newProducts.products,
      }
      store.dispatch(newAction);
    });
  }
  return next(action);
}

export default apiService;
