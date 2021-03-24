import {RESTUARANTS}  from './constants';
import produce from 'immer';
export const initialState= {
        restuarant:{
            
        },
         
 
};

const Restuarant =(state=initialState ,action)=>
    produce(state,draft=>{
	// eslint-disable-next-line default-case
	switch (action.type) {
		case RESTUARANTS.ADD_RESTUARANTS:
		break;     
        case RESTUARANTS.GET_RESTUARANT_DATA_API:
            draft.data=action.data;
            break;
        
        case RESTUARANTS.SET_DATA_SUCCESS:
            draft.restuarant={};

    }
});
export default Restuarant;