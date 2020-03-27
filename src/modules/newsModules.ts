import { createSlice } from '@reduxjs/toolkit';
import { INewsReducer, newsDefaultData } from '../reducer/newsReducer';

const newsModule = createSlice({
  name: 'news',
  initialState: newsDefaultData,
  reducers: {
    ADD_NEWS: (state, action): INewsReducer => ({
      ...state,
      ...action.payload,
    }),
  },
});

export default newsModule.reducer;
