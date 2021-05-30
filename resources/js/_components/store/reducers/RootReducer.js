import {combineReducers} from 'redux';
import UserAuthReducer from './User/Auth/UserAuthReducer';
import AdminAuthReducer from './Admin/Auth/AdminAuthReducer';

const RootReducer = combineReducers({
    userAuth : UserAuthReducer,
    adminAuth : AdminAuthReducer
});

export default RootReducer;
