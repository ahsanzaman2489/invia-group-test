import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import searchReducer from './search';
import resultsReducer from './results';

const rootReducer = combineReducers({
    form: formReducer,
    search: searchReducer,
    results: resultsReducer
});

export default rootReducer;
