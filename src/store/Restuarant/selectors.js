import { createSelector } from 'reselect';
import {initialState} from './reducers';
const selectRestuarant = state =>state.Restuarant|| initialState;
const selectRestuarantData= state=>state.data|| initialState;

export const makeSelectRestaunt=()=>
    createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant
    )

export const makeSelectRestauntName=()=>
    createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant.name
    )
  

export const makeSelectRestauntEmail=()=>
    createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant.email
    )
  
export const makeSelectPassword=()=>
    createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant.password
    )

export const makeSelectAddress=()=>
createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant.address
    )
   
 export const makeSelectCity=()=>
 createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant.city
    )
export const makeSelectState=()=>
createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant.state
    )
export const makeSelectZip=()=>
createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant.zip
    )    
export const makeSelectContact1=()=>
createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant.contact1
    )
    
export const makeSelectContact2=()=>
createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant.contact2
    )

    export const makeSelectTagline=()=>
    createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant.tagline
    )

export const makeSelectDescription=()=>
createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant.description
    )
export const makeSelectFacebookURL=()=>
createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant.facebookURL
    )
    export const makeSelectInstagramURL=()=>
    createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant.instagramURL
    )
    export const makeSelectPinterestURL=()=>
    createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant.pinterestURL
    )
    export const makeSelectTwitterURL=()=>
    createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant.twitterURL
    )

   export const makeSelectGoogleMapURL=()=>
    createSelector(
        selectRestuarant,
        restuarant=>restuarant.restuarant.googleMapURL
    )

    export const makeSelectDataFromAPI=()=> 
    createSelector(selectRestuarant,
        restuarant=>restuarant.data
        )

    export const makeSelectSetStatus=()=> 
    createSelector(selectRestuarant,
        restuarant=>restuarant.status
        )