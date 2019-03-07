import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import submittedInfo from './reducer';

const reducer = combineReducers({
  form: reduxFormReducer,
  submittedInfo
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
