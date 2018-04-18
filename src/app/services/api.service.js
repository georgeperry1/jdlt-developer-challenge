import * as types from '../store/actionTypes';

const API_ROOT = 'http://localhost:3000';

const apiService = store => next => action => {
  return next(action);
}

export default apiService;
