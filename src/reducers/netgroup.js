import { FETCH_INFO_SUC,FETCH_INFO } from '../actions/actionAxe';
 
 const netgroup = (state = {}, action)  => {
  switch(action.type) {
   case 'FETCH_INFO_SUC':
   
        return action.payload;

   
    default :
      return state;
  }
};


export default netgroup;

