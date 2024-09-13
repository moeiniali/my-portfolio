import { combineReducers } from 'redux';
import ipSlices from './slices/ipSlice'

const rootReducer = combineReducers({
    ipSlices: ipSlices,
});

export default rootReducer;
