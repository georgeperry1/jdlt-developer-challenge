import * as types from './actionTypes';

const defaultState = {
  isFetching: false,
  suppliers: [],
  products: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_SUPPLIERS:
      return {
        ...state,
        isFetching: true,
      }
    case types.GET_SUPPLIERS_SUCCESS:
      return {
        ...state,
        suppliers: action.suppliers,
        products: [...state.products, action.products],
        isFetching: false,
      }
    case types.GET_SUPPLIERS_FAILURE:
      return {
        ...state,
        isFetching: false,
      }
    case types.ADD_SUPPLIER:
      return {
        ...state,
        isFetching: true,
      }
    case types.ADD_SUPPLIER_SUCCESS:
      return {
        ...state,
        suppliers: [...state.suppliers, action.supplier],
        products: [...state.products, action.products],
        isFetching: false,
      }
    case types.ADD_SUPPLIER_FAILURE:
      return {
        ...state,
        isFetching: false,
      }
    case types.DELETE_SUPPLIER:
      return {
        ...state,
        isFetching: true,
      }
    case types.DELETE_SUPPLIER_SUCCESS:
      return {
        ...state,
        suppliers: action.suppliers,
        products: action.products,
        isFetching: false,
      }
    case types.DELETE_SUPPLIER_FAILURE:
      return {
        ...state,
        isFetching: false,
      }
    case types.ADD_PRODUCT:
      return {
        ...state,
        isFetching: true,
      }
    case types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        suppliers: action.suppliers,
        products: [...state.products, action.product],
        isFetching: false,
      }
    case types.ADD_PRODUCT_FAILURE:
      return {
        ...state,
        isFetching: false,
      }
    case types.DELETE_PRODUCT:
      return {
        ...state,
        isFetching: true,
      }
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        suppliers: action.suppliers,
        products: action.products,
        isFetching: false,
      }
    case types.DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        isFetching: false,
      }
    default:
      return state;
  }
}
