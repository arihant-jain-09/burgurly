import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import { rootReducer } from './rootReducer';

const middlewares=[ReduxThunk,logger];
const store=createStore(rootReducer,applyMiddleware(...middlewares));
export default store;