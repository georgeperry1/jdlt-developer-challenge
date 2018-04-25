import * as types from './actionTypes';

export const getSuppliers = () => {
  return {
    type: types.GET_SUPPLIERS,
    meta: {
      method: 'GET',
      params: '/suppliers',
    }
  }
};

export const addSupplier = (supplier) => {
  return {
    type: types.ADD_SUPPLIER,
    meta: {
      method: 'POST',
      params: '/suppliers',
    },
    supplier,
  }
};

export const deleteSupplier = (supplierId) => {
  return {
    type: types.DELETE_SUPPLIER,
    meta: {
      method: 'DELETE',
      params: `/suppliers/${supplierId}`,
    },
    supplierId,
  }
};

export const addProduct = (supplierId, product) => {
  return {
    type: types.ADD_PRODUCT,
    meta: {
      method: 'POST',
      params: `/suppliers/${supplierId}`,
    },
    product,
  }
};

export const deleteProduct = (supplierId, productId) => {
  return {
    type: types.DELETE_PRODUCT,
    meta: {
      method: 'DELETE',
      params: `/suppliers/${supplierId}/${productId}`,
    },
    productId,
  }
};

export const selectSupplier = (supplierId) => {
  return {
    type: types.SELECT_SUPPLIER,
    supplierId,
  }
};
