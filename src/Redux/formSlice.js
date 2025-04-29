// /src/redux/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: [],
  reducers: {
    addFormRecord: (state, action) => {
      state.push(action.payload);
    },
    deleteFormRecord: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addFormRecord, deleteFormRecord } = formSlice.actions;
export default formSlice.reducer;
