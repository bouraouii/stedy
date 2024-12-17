import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface admin {
  email: string;
  password: string;
}

export interface DataState {
  admin: Record<string, admin>;
}

const initialState: DataState = {
  admin: {},
};

const admin = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, action: PayloadAction<{}>) => {
      state.admin = action.payload;
    },
  },
});

export const { setAdmin } = admin.actions;

export default admin.reducer;