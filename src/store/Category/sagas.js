// import { all, call, fork, takeEvery, select,put } from "redux-saga/effects";

import { put,all, call, takeLatest, select,fork } from 'redux-saga/effects';


import { CATEGORY } from './constants';
import {makeSelectCategory} from './selectors';

export function* saveData(){
	console.log('from saveData',)
    const category_desc = yield select(makeSelectCategory());
	console.log("from saga",category_desc);
}

// eslint-disable-next-line require-yield
export function* getCategory(){
	console.log("from get category");
}

export function* getCategoryData(){
	yield takeLatest(CATEGORY.GET_CATEGORY_DATA,getCategory);
}

export  function* saveCategory() {
	yield takeLatest(CATEGORY.SAVE_CATEGORY_CHANGES, saveData);
}

export default function* categoryData(){
	yield all([fork(saveCategory),fork(getCategoryData)]);
}