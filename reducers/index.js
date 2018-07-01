import {combineReducer} from 'redux';
import people from './people';

const rootReducer = combineReducer({
    people,
});

export default rootReducer;
