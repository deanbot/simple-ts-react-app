import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { NAME_COUNT, reducers as counterReducers } from '../counter';

const rootReducer = (history: History) => combineReducers({
  ...counterReducers,
  router: connectRouter(history),
})

export default rootReducer