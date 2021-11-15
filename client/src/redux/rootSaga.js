import { all,call } from "@redux-saga/core/effects";
import { currentPage } from "./currentpage/currentPage.saga";
import {DishSection} from './dishes/dishes.saga'
import { CheckIfNewRestaurantSaga, FetchDishesSaga } from "./restaurant/restaurant.sagas";
function* rootSaga(){
    yield all([call(currentPage), call(DishSection), call(FetchDishesSaga), call(CheckIfNewRestaurantSaga)])
}
export default rootSaga;