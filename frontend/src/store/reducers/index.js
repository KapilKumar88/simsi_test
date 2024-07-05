import { combineReducers } from 'redux';
import cityServiceReducer from './cityServiceReducer';
import errorLoaderReducer from './errorLoaderReducer';

const rootReducer = combineReducers({
  cityService: cityServiceReducer,
  errorLoader: errorLoaderReducer,
});

export default rootReducer;
