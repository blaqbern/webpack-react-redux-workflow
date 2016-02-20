import { combineReducers } from 'redux';
import list from './modules/list';
import visibilityFilter from './modules/visibilityFilter';

const rootReducer = combineReducers({
  list,
  visibilityFilter,
});

export default rootReducer;
