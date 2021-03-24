// import { all, call, fork, takeEvery, select,put } from "redux-saga/effects";

import { put,all, call, takeLatest, select,fork } from 'redux-saga/effects';
import {addRestuarantAPI} from "../../Constants/apiUrl";

import { RESTUARANTS } from './constants';
import {makeSelectRestaunt} from './selectors';
import axios from 'axios';
import actions from 'redux-form/lib/actions';
export function getRestuarantDataAPI(url) { 
	return fetch(url).then(response => response.json()).then(data => data);
}
export function setRestuarantDataAPI(url,formData){
	// axios.create('http://khajaorder.com/')
	// return axios.post(url,restData);
	// console.log("data from res data",restData);
	
	return fetch(url,{method:'POST',body:formData}).then(response=>response.json()).then(data=>data);
}
export function* saveData(action){
	try{
		const data=action.data;
	console.log("from saga real ",data);
    const restuarant_desc = yield select(makeSelectRestaunt());
	console.log("from saga",restuarant_desc);
	const storage=JSON.parse(localStorage.getItem("authUser"));
	
	const token= storage.token;
	
	const allData= JSON.stringify(Object.assign({token:token},data));
	console.log("all data",allData)
	// const formData = new FormData();
	// formData.append("token",token);
	// formData.append("r_name",data.restuarantName);
	// formData.append("r_email",data.restuarantEmail);

	
	
	const response = yield call(setRestuarantDataAPI,"https://khajaorder.com/korderapi/resturants/add.php",allData)
	if(response.success){
		console.log("response",response)
		yield put({type:RESTUARANTS.SET_DATA_SUCCESS,status:response.success});
	}
	else if(response.error){
		yield put({type:RESTUARANTS.SET_DATA_ERROR,error:response.error});	
	}
	else{
		console.log("we have error in the data you provided  ")
	}	
}	
catch(err){
	yield put({type:RESTUARANTS.SET_DATA_ERROR,error:err.message});
}
}

// eslint-disable-next-line require-yield
export function* getRestuarant(){
	const storage=JSON.parse(localStorage.getItem("authUser"));
	// const jsonStorage=storage.json();
	const token= storage.token;
	const tokenData=JSON.stringify({token:token})
	

	const response = yield call(setRestuarantDataAPI,"https://khajaorder.com/korderapi/resturants/view.php",tokenData);
	console.log('res from get',response);
	const data = response.data;
	yield put({type:RESTUARANTS.GET_RESTUARANT_DATA_API,data:data})
}

export function* getRestuarantData(){
	yield takeLatest(RESTUARANTS.GET_RESTUARANT_DATA,getRestuarant);
}

export  function* saveRestuarant() {
	yield takeLatest(RESTUARANTS.SAVE_CHANGES, saveData);
}

export default function* restuarantData(){
	yield all([fork(saveRestuarant),fork(getRestuarantData)]);
}