import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../stores/store";

interface ISignInForm {
  email: string;
  password: string;
}

const initialState: ISignInForm = {
  email: "",
  password: "",
};

export const signInFormSlice = createSlice({
  name: "signInForm",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmail, setPassword } = signInFormSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user;

export default signInFormSlice.reducer;
