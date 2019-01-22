import actionTypes from '../actions/actionTypes';
import actionTypes1 from '../actions/actionAxe';

export default (
  state = {
    appLoaded: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.APP_LOAD:
      return { ...state, appLoaded: action.payload };

     

    default:
      return state;
  }
};
