import {combineReducers} from 'redux';

export function addProductReducer(state, action){
    console.log(`In Add Product reducer ${JSON.stringify(action.product)}`);
    switch(action.type){
        case 'ADD_PRODUCT':
            return action.product; /* The newly received product will be mutated in state */
         default:
            return state;     
    }
}
/* Initial State is an empty array */
export function listProductsReducer(state=[],action){
    console.log(`In List Products reducer ${JSON.stringify(state)}`);
  switch(action.type){
     case 'ADD_PRODUCT':
        /* call the other reducer function that is returning the newly
          received product, and its will be mutated in state array
            the initial state passedb is undefined
          */
         return [...state, addProductReducer(undefined, action)];
    default:
         return state;           
  }
}

/* Since the listProductsReducer is invoking addProductReducer
 we need not to pass it again to combineReducers()
*/
const reducers = combineReducers({listProductsReducer});

export default reducers;

  



