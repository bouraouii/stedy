import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface clinet {
  email: string;
  password: string;
  confirmationPassword: string;
}

export interface DataState {
  test: Record<string, clinet>;
}

const initialState: DataState = {
  test: {},
};

const test = createSlice({
  name: "test",
  initialState,
  reducers: {
    setClinet: (state, action: PayloadAction<{}>) => {
      state.test = action.payload;
    },
  },
});

export const { setClinet } = test.actions;

export default test.reducer;