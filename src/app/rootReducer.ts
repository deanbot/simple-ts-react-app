import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { reducers as counterReducers } from '../counter';

const rootReducer = (history: History) => combineReducers({
  ...counterReducers,
  router: connectRouter(history),
})

export default rootReducer