import { createSelector } from 'reselect';
import {initialState} from './reducers';
const selectItem = state => initialState;
// const selectRestuarantData= state=>state.data|| initialState;

// export const makeSelectItem=()=>
//     createSelector(
//         selectItem,
//         Item=>Item
//     )

export const makeSelectItemName=()=>
    createSelector(
        selectItem,
    Items=>Items.name
    )

export const makeSelectItemNickname=()=>createSelector(
      createSelector(
          selectItem,
          Items=>Items.nickname)
  )
export const makeSelectCategory=()=>
createSelector(
      createSelector(
          selectItem,
          Items=>Items.category)
  )
export const makeSelectRestaunt=()=>
createSelector(
      createSelector(
          selectItem,
          Items=>Items.restuarant)
  )

export const makeSelectRegularPrice=()=>
createSelector(
      createSelector(
          selectItem,
          Items=>Items.price)
  )
export const makeSelectNewPrice=()=>
createSelector(
      createSelector(
          selectItem,
          Items=>Items.nprice)
  )
export const makeSelectDiscountRate=()=>
createSelector(
      createSelector(
          selectItem,
          Items=>Items.discountRate)
  )
export const makeSelectDescription=()=>
createSelector(
      createSelector(
          selectItem,
          Items=>Items.description)
  )
export const makeSelectImage2=()=>createSelector(
      createSelector(
          selectItem,
          Items=>Items.image2)
  )
export const makeSelectImage1=()=>createSelector(
      createSelector(
          selectItem,
          Items=>Items.image1)
  )

export const makeSelectItemImage=()=>
    createSelector(
        selectItem,
        Items=>Items.image
    )
