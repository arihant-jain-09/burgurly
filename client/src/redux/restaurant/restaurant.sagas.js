import { takeEvery,put,select} from "redux-saga/effects";
import { setCurrentPage } from "../currentpage/currentPage.action";
import { fetchDishes } from "../dishes/dishes.action";

export const current = (state) => state.category?.dishsection;

export function* FetchDishes(){
    let currentSection = yield select(current);
    yield put(fetchDishes(currentSection));
}

export function* FetchDishesSaga(){
    yield takeEvery(['GET_RESTAURANT_INFO','SET_DISH_SECTION'],FetchDishes)
}

function* CheckIfNewRestaurant(action){
    if(action.payload && action.payload.RestaurantAddress==null && action.payload.RestaurantName==null){
        yield put(setCurrentPage("Settings"));
    }
}

export function* CheckIfNewRestaurantSaga(){
    yield takeEvery('GET_RESTAURANT_INFO',CheckIfNewRestaurant)
}
