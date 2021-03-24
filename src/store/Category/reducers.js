import {CATEGORY}  from './constants';
import produce from 'immer';
export const initialState= {
       
         
 
};

const Category =(state=initialState ,action)=>
    produce(state,draft=>{
	// eslint-disable-next-line default-case
	switch (action.type) {
		
        case CATEGORY.CHANGE_CATEGORY_NAME:
            draft.name = action.name;
            break;
	
    
        case CATEGORY.CHANGE_CATEGORY_IMAGES:
            draft.image=action.image;
            break;
	
    }
});
export default Category;