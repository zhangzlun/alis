import { createSlice } from '@reduxjs/toolkit';

export type CarouselModuleType = {
  action: string;
};

const defaultData = {
  action: '',
};

const carouselModule = createSlice({
  name: 'nav',
  initialState: defaultData,
  reducers: {
    SET_ACTION: ((state) => {}),
  },
});

export default carouselModule.reducer;
