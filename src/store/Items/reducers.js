import {ITEMS}  from './constants';
import produce from 'immer';
export const initialState= {
    name:'',
    nickname:'',
    category:'',
    restuarant:'',
    price:'',
    nprice:'',
    discountRate:'',
    description:'',
    image1:'',
    image2:'',
};

const Items =(state=initialState ,action)=>
    produce(state,draft=>{
	// eslint-disable-next-line default-case
	switch (action.type) {
		
        case ITEMS.CHANGE_ITEM_NAME:
            draft.name = action.name;
            break;
	
        case ITEMS.CHANGE_ITEM_NICKNAME:
            draft.nickname = action.nickname;
            break;
	
        case ITEMS.CHANGE_ITEM_CATEGORY:
            draft.category = action.category;
            break;
	
        case ITEMS.CHANGE_RESTUARANT:
            draft.restuarant = action.restuarant;
            break;
	
        case ITEMS.CHANGE_ITEM_REGULAR_PRICE:
            draft.price = action.price;
            break;
	
        case ITEMS.CHANGE_ITEM_NEW_PRICE:
            draft.nprice = action.nprice;
            break;
	
        case ITEMS.CHANGE_ITEM_DISCOUNT_RATE:
            draft.discountRate = action.discountRate;
            break;
	
        case ITEMS.CHANGE_ITEM_DESCRIPTION:
            draft.description = action.desc;
            break;
	
    
        case ITEMS.CHANGE_ITEM_IMAGES1:
            draft.image1=action.image1;
            break;
        case ITEMS.CHANGE_ITEM_IMAGES2:
            draft.image2=action.image2;
            break;
	
    }
});
export default Items;