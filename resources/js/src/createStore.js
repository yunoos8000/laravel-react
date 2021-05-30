import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './store/reducers/RootReducer';

export const middlewares = [thunk];

export const createStoreWithMiddlewae = applyMiddleware(...middlewares)(createStore);

export const store = createStoreWithMiddlewae(RootReducer);
