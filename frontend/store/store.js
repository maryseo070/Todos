import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { rootReducer } from '../reducers/root_reducer.js';

import thunk from '../middleware/thunk.js';

export function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk, logger));
}
