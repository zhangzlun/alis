import {
  configureStore,
  getDefaultMiddleware,
  EnhancedStore,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';

export const rootReducer = combineReducers({
  // サンプルを追加するのであれば記述
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
