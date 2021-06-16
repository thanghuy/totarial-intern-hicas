import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import RootReducer from './rootReducer';
import createSagaMiddleware  from 'redux-saga';
import RootSaga from './rootSaga';

const sagaMiddleWare = createSagaMiddleware();
export const store = configureStore({
  reducer: RootReducer,
  middleware : [sagaMiddleWare]
});
sagaMiddleWare.run(RootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
