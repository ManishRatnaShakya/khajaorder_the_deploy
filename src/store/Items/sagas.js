// import { all, call, fork, takeEvery, select,put } from "redux-saga/effects";

import { put,all, call, takeLatest, select,fork } from 'redux-saga/effects';


import { ITEMS } from './constants';
import {makeSelectCategory} from './selectors';

export function* saveItemData(){
	console.log('from saveData',)
    const category_desc = yield select(makeSelectCategory());
	console.log("from saga",category_desc);
}

// eslint-disable-next-line require-yield
export function* getItem(){
	console.log("from get category");
}

export function* getItemData(){
	yield takeLatest(ITEMS.VIEW_ITEMS,getItem);
}

export  function* saveItem() {
	yield takeLatest(ITEMS.SAVE_ITEMS_CHANGES, saveItemData);
}

export default function* categoryData(){
	yield all([fork(saveItem),fork(getItemData)]);
}