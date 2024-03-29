import types from './types';

const add = item => ({
  type: types.ADD_TRANS,
  item,
});

const remove = id => ({
  type: types.REMOVE_TRANS,
  id,
});

const getPlnValue = number => ({
  type: types.GET_PLN_VALUE,
  number,
});

const addId = number => ({
  type: types.ADD_ID,
  number,
});

const updateTrans = value => ({
  type: types.UPDATE_TRANS,
  value,
});

const updateEuro = value => ({
  type: types.UPDATE_EURO,
  value,
});

const updatePln = value => ({
  type: types.UPDATE_PLN,
  value,
});

const updateTransName = value => ({
  type: types.UPDATE_TRANS_NAME,
  value,
});

const error = () => ({
  type: types.ERROR,
});

const remove_error = () => ({
  type: types.REMOVE_ERROR,
});
export default {
  add,
  remove,
  getPlnValue,
  addId,
  updateTrans,
  error,
  remove_error,
  updateTransName,
  updateEuro,
  updatePln,
};
