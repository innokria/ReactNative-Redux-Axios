import axios from 'axios';




export const FETCH_INFO = 'FETCH_INFO';
export const FETCH_INFO_SUC = 'FETCH_INFO_SUC';
export const FETCH_INFO_FAILURE='fail';


//NOTE :
//URL can be loaded from confg file rather than harcode


export function getUser () {
	
  return (dispatch) => {

      axios.get('http://filestore.mnetgroup.com/output.html')   
        .then((res) =>{
            dispatch({type: FETCH_INFO_SUC, payload: res});
        })
        .catch((error)=> {
            dispatch({type: FETCH_INFO_FAILURE, payload: error});
        })
  }

}


export function getRahul () {

  return (dispatch) => {
     fetch('http://filestore.mnetgroup.com/output.html').then((res) => res.json())
    .then((data) => {
        data.sort((a, b) => b.grade - a.grade);  
        dispatch({type: FETCH_INFO_SUC, payload: data});

        });
     }

}





export function getInfo() {

 return (dispatch) => {
   axios.get('http://filestore.mnetgroup.com/output.html')
    .then((data) => {
        data.sort((a, b) => b.grade - a.grade);
        dispatch({type: FETCH_INFO_SUC, payload: data});
      
    })

    .catch((error)=> {
   
            dispatch({type: FETCH_INFO_FAILURE, payload: error});
        })
  }
}




