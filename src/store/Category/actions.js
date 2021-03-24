import  {CATEGORY}  from './constants';



export const changeCategoryName = name =>({
    type:CATEGORY.CHANGE_CATEGORY_NAME,
    name
})

export const changeCategoryImage = image =>({
    type:CATEGORY.CHANGE_CATEGORY_IMAGES,
    image
})

export const saveChanges=()=>({
    type:CATEGORY.SAVE_CATEGORY_CHANGES
})
export const getRestuarantData=()=>({
    type:CATEGORY.GET_RESTUARANT_DATA
})