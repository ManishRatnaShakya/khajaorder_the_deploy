import { createSelector } from 'reselect';
import {initialState} from './reducers';
const selectCategory = state =>state.Category|| initialState;
// const selectRestuarantData= state=>state.data|| initialState;

export const makeSelectCategory=()=>
    createSelector(
        selectCategory,
        category=>category
    )

export const makeSelectCategoryName=()=>
    createSelector(
        selectCategory,
    category=>category.name
    )
  

export const makeSelectCategoryImage=()=>
    createSelector(
        selectCategory,
        category=>category.image
    )
