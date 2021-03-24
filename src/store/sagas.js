import { all } from 'redux-saga/effects'

//public
import accountSaga from './auth/register/saga';
import loginSaga from './Login/sagas';
import forgetSaga from './auth/forgetpwd/saga';
import LayoutSaga from './layout/saga';
import restuarantData from './Restuarant/sagas';
import categoryData from './Category/sagas';
export default function* rootSaga() {
    yield all([
        
        //public
        categoryData(),
        accountSaga(),
        loginSaga(),
        forgetSaga(),
        LayoutSaga(),
        restuarantData(),
    ])
}