// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { createSlice } from '@reduxjs/toolkit';

export type NavModuleType = {
  navlsit: Array<Array<string>>;
};

const defaultData = [
  ['ホーム', 'index'],
  ['会社概要', 'Company'],
  ['採用情報', 'Recruit'],
  ['事業内容', 'Service'],
  ['お問い合わせ', 'Contact'],
];

const navModule = createSlice({
  name: 'nav',
  initialState: defaultData,
  reducers: {
    SET_DATA: (state, action) => [...state, ...action.payload],
  },
});

export default navModule.reducer;
