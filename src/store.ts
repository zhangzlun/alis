import {
  configureStore,
  getDefaultMiddleware,
  EnhancedStore,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import navModule from './modules/navModules';

export const rootReducer = combineReducers({
  nav: navModule,
});

const setupStore = (): EnhancedStore => {
  const middlewares = [...getDefaultMiddleware()];

  // only development
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  return configureStore({
    reducer: rootReducer,
    middleware: middlewares,
    devTools: true,
  });
};

export default setupStore;
