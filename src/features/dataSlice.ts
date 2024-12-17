// src/features/dataSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Item {
 title:string
 content:string
 subTitle:string
}

export interface DataState {
  data: Record<number, {}>;
}

const initialState: DataState = {
  data: {}
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<{}>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
